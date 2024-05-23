// import { db } from "../../../../utils/apiConnection";

// export const GET = async ({ params, request }) => {
//   const url = new URL(request.url);
//   const query = new URLSearchParams(url.search);

//   const queryData = {
//     page: query.get("page"),
//   };

//   queryData.page = queryData.page ? queryData.page : 1;

//   let releases = await db.getArtistReleases(params.artistId, {
//     sort: "format",
//     year: "2003",
//     sort_order: "asc",
//     page: queryData.page
//   });
//   return new Response(JSON.stringify(releases));
// };

import { db } from "../../../../utils/apiConnection";

export const GET = async ({ params, request }) => {
  const url = new URL(request.url);
  const query = new URLSearchParams(url.search);

  const queryData = {
    page: query.get("page"),
  };

  queryData.page = queryData.page ? queryData.page : 1;

  let releases = await db.getArtistReleases(params.artistId, {
    sort: "format",
    year: "2003",
    sort_order: "asc",
    page: queryData.page
  });
  return new Response(JSON.stringify(releases));
};