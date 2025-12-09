import axios from "axios";

const API_KEY = "e2598e08e70f6545a03dbf39c65332a6";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;

export const imgPath = "https://image.tmdb.org/t/p/original";
