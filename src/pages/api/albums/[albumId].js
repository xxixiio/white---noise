import { client } from "../../../utils/apiConnection";

export const GET = async ({ params, request }) => {
  const albumData = await client.albums.get(params.albumId);
  return new Response(JSON.stringify(albumData));
};