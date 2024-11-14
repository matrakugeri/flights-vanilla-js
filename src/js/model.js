import { API_URL, key, RES_PER_PAGE } from "./config";

export const state = {
  flight: {},
  search: {
    query: "",
    results: [],
    resultsPerPage: RES_PER_PAGE,
    page: 0,
  },
};

export const loadSearchResults = async function () {
  try {
    const res = await fetch(`${API_URL}`);
    console.log(res);
    const data = await res.json();
    console.log(data);
    if (!res.ok) throw new Error(`Error`);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
