import { useEffect, useState } from "react";
import "../types/spotifytype";
import "../styles/spotify.css";
import Image from "next/image";

export default function Spotify() {
  const [data, setData] = useState<SpotifyResponse>({
    Current: null,
    Tracks: null,
    Artists: null,
    Recent: null,
  });

  let interval: ReturnType<typeof setInterval>;
  const [current, setCurrent] = useState("Recents");

  const changeCurrent = (e: React.MouseEvent<HTMLHeadingElement>) => {
    setCurrent(e.currentTarget.id);
  };

  let artistsMap = (artist: string[], artistLink: string[]) => {
    return artist.map((name, index) => (
      <span key={name}>
        {index != 0 ? ",  " : ""}
        <a
          href={artistLink[index]}
          target={"_blank"}
          aria-label={"Spotify link for " + artist}
        >
          <p>
            {name}
          </p>
        </a>
      </span>
    ));
  };

  let formatDuration = (duration_ms: number): string => {
    if (duration_ms === -1) {
      return "N/A";
    }
    let minutes = Math.floor(duration_ms / 60000);
    let seconds = Math.floor((duration_ms % 60000) / 1000);
    return minutes + ":" + (seconds.toString().length === 1 ? "0" : "") +
      seconds;
  };

  async function getData() {
    try {
      const response = await fetch("/.netlify/functions/api");
      const results: SpotifyResponse = await response.json();

      setData((prev) => ({
        Current: results.Current !== null ? results.Current : prev.Current,
        Tracks: results.Tracks !== null ? results.Tracks : prev.Tracks,
        Artists: results.Artists !== null ? results.Artists : prev.Artists,
        Recent: results.Recent !== null ? results.Recent : prev.Recent,
      }));
    } catch (err) {
      console.error("Errors with fetching: ", err);
    }
  }

  useEffect(() => {
    getData();
    interval = setInterval(getData, 5000);

    return () => clearInterval(interval);
  }, []);

  let mapTracks = (Tracks: Track[]) => {
    return Tracks.map((track, index) => (
      <div className={"SmallerItem Item SmallerItem" + index} key={index}>
        <Image
          alt={"Album Cover"}
          src={track.imageLink}
          className={"SmallerAlbum"}
          width={48}
          height={48}
        />
        <div className={"SmallerTrackInfo"}>
          <div className={"SmallerTrackName"}>
            <span>
              <a
                href={track.link}
                target={"_blank"}
                aria-label={"Spotify link for " + track.name}
              >
                <h1>{track.name}</h1>
              </a>
            </span>
          </div>
          <div className={"SmallerTrackArtists"}>
            {artistsMap(track.artist, track.artistLink)}
          </div>
        </div>
        <div className={"SmallerTimeInfo"}>
          <p>{formatDuration(track.duration)}</p>
          <a
            href={track.link}
            target={"_blank"}
            className={"SmallerLink"}
            aria-label={"Spotify link for " + track.name}
          >
            <i className={"fa-solid fa-circle-play"} />
          </a>
        </div>
      </div>
    ));
  };

  let mapTopArtists = (Artists: SpotifyArtist[]) => {
    return Artists.map((artist, index) => (
      <div className={"SmallerItem Item SmallerItem" + index} key={index}>
        <Image
          height={48}
          width={48}
          alt={"Album Cover"}
          src={artist.imageLink}
          className={"SmallerAlbum"}
        />
        <div className={"SmallerArtistInfo"}>
          <span>
            <a
              href={artist.link}
              target={"_blank"}
              aria-label={"Spotify link for " + artist.name}
            >
              <h1>{artist.name}</h1>
            </a>
          </span>
        </div>
        <div className={"SmallerTimeInfo"}>
          <a
            href={artist.link}
            target={"_blank"}
            className={"SmallerLink"}
            aria-label={"Spotify link for " + artist.name}
          >
            <i className={"fa-solid fa-circle-play"} />
          </a>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {data.Current != null && (
        <h1 className={"SpotifyTitle"}>What I Am Jamming Out To</h1>
      )}
      <div className="Spotify">
        <div className="CurrentTrackContainer">
          {data.Current != null &&
            (
              <div className={"CurrentTrack Item"}>
                <div className={"CurrentTrackName"}>
                  <span>
                    <a
                      href={data.Current.link}
                      target={"_blank"}
                      aria-label={"Spotify link for " + data.Current.name}
                    >
                      <h1 className={"CTN"}>{data.Current.name}</h1>
                    </a>
                  </span>
                </div>
                <Image
                  src={data.Current.imageLink}
                  alt={"Album Cover"}
                  width={226}
                  height={226}
                  className={"MainTrackCover"}
                  priority={true}
                  placeholder={"blur"}
                />
                <div className={"CurrentTrackInfo"}>
                  <div className={"CurrentTrackAlbumArtist"}>
                    <div className={"CurrentAlbum"}>
                      <span>
                        <a
                          href={data.Current.albumLink}
                          target={"_blank"}
                          aria-label={"Spotify link for " + data.Current.album}
                        >
                          <h1 className={""}>{data.Current.album}</h1>
                        </a>
                      </span>
                    </div>
                    <div className="ArtistForTrack">
                      {artistsMap(data.Current.artist, data.Current.artistLink)}
                    </div>
                  </div>
                  <div className={"CurrentTrackTime"}>
                    <h1>{formatDuration(data.Current.duration)}</h1>
                    <a
                      href={data.Current.link}
                      target={"_blank"}
                      aria-label={"Spotify link for " + data.Current.name}
                    >
                      <i className={"fa-solid fa-circle-play"} />
                    </a>
                  </div>
                </div>
              </div>
            )}
        </div>
        <div className="OtherInformation">
          {(data.Recent !== null) &&
            (
              <div className={"Options"}>
                <h1
                  className={(current === "Recents" ? "Highlight" : "") +
                    " Item"}
                  id={"Recents"}
                  onClick={changeCurrent}
                >
                  Recents
                </h1>
                <h1
                  className={(current === "Artists" ? "Highlight" : "") +
                    " Item"}
                  id={"Artists"}
                  onClick={changeCurrent}
                >
                  Artists
                </h1>
                <h1
                  className={(current === "Tracks" ? "Highlight" : "") +
                    " Item"}
                  id={"Tracks"}
                  onClick={changeCurrent}
                >
                  Tracks
                </h1>
              </div>
            )}
          <div className={"OtherContent"}>
            {current === "Recents" && data.Recent !== null &&
              (mapTracks(data.Recent))}
            {current === "Artists" && data.Artists !== null &&
              (mapTopArtists(data.Artists))}
            {current === "Tracks" && data.Tracks !== null &&
              (mapTracks(data.Tracks))}
          </div>
        </div>
      </div>
    </div>
  );
}
