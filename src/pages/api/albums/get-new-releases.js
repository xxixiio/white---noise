import { client } from "../../../utils/apiConnection";

export const GET = async ({ params, request }) => {
  const newReleasesAlbums = await client.browse.getNewReleases({ limit: 15 });
  return new Response(JSON.stringify(newReleasesAlbums));
};  