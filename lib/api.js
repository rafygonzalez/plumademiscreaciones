import * as IsoFetch from "isomorphic-unfetch";

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path, withIsomorphic) {
  const requestUrl = getStrapiURL(path);
  if (withIsomorphic) {
    const response = await IsoFetch(requestUrl);
    const data = await response.json();
    return data;
  } else {
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }
}
