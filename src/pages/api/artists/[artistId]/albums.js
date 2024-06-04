import { client } from "../../../../utils/apiConnection";

export const GET = async ({ params, request }) => {
  const albumData = await client.artists.getAlbums(params.artistId);
  return new Response(JSON.stringify(albumData));
};