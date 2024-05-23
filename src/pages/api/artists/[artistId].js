import { db } from "../../../utils/apiConnection";

export const GET = async ({ params }) => {
  let artistData = await db.getArtist(params.artistId);
  return new Response(JSON.stringify(artistData));
};
