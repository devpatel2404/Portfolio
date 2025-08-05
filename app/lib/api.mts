import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { Context } from "@netlify/functions";
import "../types/spotifytype";

const uuid = process.env.SUPABASE_UUID;
const key = process.env.SUPABASE_SECRET_KEY;
const url = process.env.SUPABASE_URL;

async function dataFromDatabase() {
  if (!url || !key) {
    return {
      Current: null,
      Recent: null,
      Tracks: null,
      Artists: null,
    };
  }

  const supabase = createClient(url, key);
  const response = await supabase.from("spotifydata").select();
  const data: SpotifyResponse = response.data?.at(0)?.data ?? {};

  return data;
}

export default async (request: Request, context: Context) => {
  const data: SpotifyResponse = await dataFromDatabase();
  if (data.Current === null) {
    console.log("Cannot Find Current");
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
