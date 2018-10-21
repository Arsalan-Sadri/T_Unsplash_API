const axios = require("axios");

const BASE_URL = "https://api.unsplash.com/search/photos/";
const ACC_KEY = "1b7c6a4fc60537946402771ed99da19afa9e662b8f4fcf5f80dfc6256e41f34d";
const PARAM1 = "client_id=" + ACC_KEY;
const PHOTOS_PER_PAGE = 12;
const PARAM2 = "per_page=" + PHOTOS_PER_PAGE;
const QUERY_TERM = "cars";
const PARAM3 = "query=" + QUERY_TERM;

module.exports = axios.get(BASE_URL + "?" + PARAM1 + "&" + PARAM2 + "&" + PARAM3);

/* 
    for a simple search without any query term,
    just remove "search" from the base url and make data.data.results to
    data.data
*/