import { client } from "../../../utils/apiConnection";

export const GET = async ({ params, request }) => {
  const artistData = await client.artists.get(params.artistId);
  return new Response(JSON.stringify(artistData));
};