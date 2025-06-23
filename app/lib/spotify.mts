import * as dotenv from "dotenv";
import { Config, Context } from "@netlify/functions";
import fetch, { RequestInit } from "node-fetch";
import { createClient } from "@supabase/supabase-js";
import "../types/spotifytype";

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshtoken = process.env.SPOTIFY_REFRESH_TOKEN;
const code = process.env.SPOTIFY_CODE;
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SECRET_KEY;
const uuid = process.env.SUPABASE_UUID;
let accessToken = "";

async function refreshToken() {
  if (!clientId || !refreshtoken || !code) return "";

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " +
        (Buffer.from(clientId + ":" + clientSecret).toString("base64")),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshtoken,
    }),
  });

  const contentType = response.headers.get("content-type");

  if (response.ok && contentType?.includes("json")) {
    const data: TokenResponse = await response.json();
    accessToken = data.access_token;
  } else {
    const txt = await response.text();
    console.log("Error: ", txt);
    accessToken = "";
  }
}

async function getErrorMessage(resp) {
  try {
    const data = await resp.json();
    return data.message || JSON.stringify(data);
  } catch {
    return await resp.text();
  }
}

async function generalFetch(url, options?: RequestInit) {
  if (!options) {
    throw Error("No options are set check function");
  }

  const response = await fetch(url, options);

  if (response.status === 401) {
    await refreshToken();
    if (!options.headers) {
      throw Error("No Headers");
    }

    options["headers"]["Authorization"] = "Bearer " + accessToken;

    const fallback = await fetch(url, options);
    if (fallback.status === 200) {
      console.log("Fallback succeeded");
      return fallback;
    }

    throw Error("Token refresh token did not help");
  } else if (response.status === 403) {
    const message = await getErrorMessage(response);
    throw Error("Error 403: " + message);
  } else if (response.status === 429) {
    throw Error("Wait some time");
  }

  return response;
}

async function saveData(
  current: SpotifyCurrentTrack | null,
  artists: SpotifyArtist[] | null,
  recent: Track[] | null,
  tracks: Track[] | null,
) {
  if (url === undefined || key === undefined || uuid === undefined) {
    console.log("Something is incorrectly configured.");
    return false;
  }

  const supabase = createClient(url, key);
  const supaResponse = await supabase.from("spotifydata").select();
  const supaData: SpotifyResponse = supaResponse.data?.at(0)?.data ?? {};

  const dataToSend = {
    id: uuid,
    data: {
      Current: current !== null ? current : supaData.Current,
      Artists: artists !== null ? artists : supaData.Artists,
      Recent: recent !== null ? recent : supaData.Recent,
      Tracks: tracks !== null ? tracks : supaData.Tracks,
    },
  };

  const res = await supabase.from("spotifydata").upsert([dataToSend]);

  if (res.error !== null) {
    console.error("Error with upserting the data: ", res.error);
  }

  return true;
}

async function getCurrTrackInfo(CurrTrack) {
  let trackInfo: SpotifyCurrentTrack = {
    name: "",
    album: "",
    albumLink: "",
    artistLink: [],
    duration: 0,
    artist: [],
    imageLink: "",
    link: "",
  };

  const data: SpotifyTrack = CurrTrack["item"];

  trackInfo.duration = data.duration_ms;
  trackInfo.album = data.album.name;
  trackInfo.link = data.external_urls.spotify;
  trackInfo.albumLink = data.album.external_urls.spotify;
  trackInfo.name = data.name;
  trackInfo.imageLink = data.album.images[0].url;

  for (let a = 0, max = data.artists.length; a < max; a++) {
    trackInfo.artist.push(data.artists[a].name);
    trackInfo.artistLink.push(data.artists[a].external_urls.spotify);
  }

  return trackInfo;
}

async function getTrackInfo(Tracks) {
  let tracksInfo: Track[] = [];

  const data: SpotifyTrack[] = Tracks["items"];
  for (let a = 0, end = data.length; a < end; a++) {
    let info: Track = {
      name: "",
      link: "",
      artist: [],
      artistLink: [],
      album: "",
      albumLink: "",
      duration: 0,
      imageLink: "",
    };

    info.name = data[a].name;
    info.album = data[a].album.name;
    info.albumLink = data[a].album.external_urls.spotify;
    info.duration = data[a].duration_ms;
    info.imageLink = data[a].album.images[0].url;
    info.link = data[a].external_urls.spotify;

    for (let b = 0, max = data[a].artists.length; b < max; b++) {
      info.artist.push(data[a].artists[b].name);
      info.artistLink.push(data[a].artists[b].external_urls.spotify);
    }

    tracksInfo.push(info);
  }

  return tracksInfo;
}

async function getRecentTrackInfo(Tracks) {
  let tracksInfo: Track[] = [];

  const data: SpotifyTrack[] = [];

  for (let a = 0, end = Tracks["items"].length; a < end; a++) {
    data.push(Tracks["items"][a]["track"]);
  }

  for (let a = 0, end = data.length; a < end; a++) {
    let info: Track = {
      name: "",
      link: "",
      artist: [],
      artistLink: [],
      album: "",
      albumLink: "",
      duration: 0,
      imageLink: "",
    };

    info.name = data[a].name;
    info.album = data[a].album.name;
    info.albumLink = data[a].album.external_urls.spotify;
    info.duration = data[a].duration_ms;
    info.imageLink = data[a].album.images[0].url;
    info.link = data[a].external_urls.spotify;

    for (let b = 0, max = data[a].artists.length; b < max; b++) {
      info.artist.push(data[a].artists[b].name);
      info.artistLink.push(data[a].artists[b].external_urls.spotify);
    }

    tracksInfo.push(info);
  }

  return tracksInfo;
}

async function getArtistInfo(Artists) {
  let artistInfo: Artist[] = [];

  const data: SpotifyArtists[] = [];
  for (let a = 0, end = Artists["items"].length; a < end; a++) {
    data.push(Artists["items"][a]);
  }

  for (let a = 0, end = data.length; a < end; a++) {
    let artist: Artist = {
      name: "",
      link: "",
      imageLink: "",
    };

    artist.name = data[a].name;
    artist.link = data[a].external_urls.spotify;
    artist.imageLink = data[a].images[0].url;

    artistInfo.push(artist);
  }

  return artistInfo;
}

async function getCurrent() {
  if (!clientId || !refreshtoken || !code) {
    console.log("Something is not correctly found");
    return null;
  }

  const url = new URL(
    "Https://api.spotify.com/v1/me/player/currently-playing",
  );

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  try {
    const response = await generalFetch(url, options);
    const contentType = response.headers.get("content-type");
    if (
      response.status !== 204 && contentType &&
      contentType.includes("application/json")
    ) {
      const body = await response.json();
      const data: SpotifyCurrentTrack = await getCurrTrackInfo(body);
      return data;
    } else {
      console.log("Not playing a track");
      return null;
    }
  } catch (err) {
    console.error("Error during fetch: ", err);
    return null;
  }
}

async function getArtist() {
  if (!clientId || !refreshtoken || !code) {
    console.log("Something is not correctly found");
    return [];
  }

  const url = new URL(
    "Https://api.spotify.com/v1/me/top/artists?limit=5&offset=0",
  );

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  try {
    const response = await generalFetch(url, options);
    const body = await response.json();
    const data = await getArtistInfo(body);
    return data;
  } catch (err) {
    console.error("getArtist(): Error during fetch: ", err);
    return [];
  }
}

async function getRecent() {
  if (!clientId || !refreshtoken || !code) {
    console.log("Something is not correctly found");
    return [];
  }

  const url = new URL(
    "Https://api.spotify.com/v1/me/player/recently-played?limit=5",
  );

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  try {
    const response = await generalFetch(url, options);
    const body = await response.json();
    const data: Track[] = await getRecentTrackInfo(body);
    return data;
  } catch (err) {
    console.error("getRecent(): Error during fetch: ", err);
    return [];
  }
}

async function getTrack() {
  if (!clientId || !refreshtoken || !code) {
    console.log("Something is not correctly found");
    return [];
  }

  const url = new URL(
    "Https://api.spotify.com/v1/me/top/tracks?limit=5&offset=0",
  );

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  try {
    const response = await generalFetch(url, options);
    const body = await response.json();
    const data: Track[] = await getTrackInfo(body);
    return data;
  } catch (err) {
    console.error("Error during fetch: ", err);
    return [];
  }
}

export default async function handler(req: Request) {
  console.log("ClientID: ", clientId);
  console.log("ClientSecret: ", clientSecret);
  console.log("RefreshToken: ", refreshtoken);
  console.log("Code: ", code);
  console.log("URL: ", url);
  console.log("Key: ", key);
  console.log("UUID: ", uuid);

  if (accessToken === "") {
    await refreshToken();
  }

  const { next_run } = await req.json();

  console.log("Next_run: ", next_run);

  const tracks = await getTrack();
  const artists = await getArtist();
  const recently = await getRecent();
  const current = await getCurrent();

  saveData(current, artists, recently, tracks);

  return new Response("OK", { status: 200 });
}

export const config: Config = {
  schedule: "* * * * *",
};
