import { client } from "../../../../utils/apiConnection";

export const GET = async ({ params, request }) => {
  const results = await client.artists.search(params.query, { limit: 10, includeExternalAudio: false, market: "US" });
  return new Response(JSON.stringify(results));
};
