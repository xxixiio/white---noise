import { client } from "../../../utils/apiConnection";

export const GET = async ({ params, request }) => {
  const url = new URL(request.url);
  const query = new URLSearchParams(url.search);

  const queryData = {
    artist: query.get("artist"),
    tracks: query.get("tracks")
  };

  const options = {
    limit: 5,
    seed_artists: queryData.artist,
    seed_tracks: queryData.tracks
  };
  const recommendations = await client.browse.getRecommendations(options);
  return new Response(JSON.stringify(recommendations));
};
