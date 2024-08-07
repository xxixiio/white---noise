import { client } from "../../../utils/apiConnection";
import bestSellersList from "../../../consts/bestSellersList.js";

export const GET = async ({ params, request }) => {
  let bestSellers = [];

  for (const id of bestSellersList) {
    const albumData = await client.albums.get(id);
    bestSellers.push(albumData);
  }

  return new Response(JSON.stringify(bestSellers));
};
