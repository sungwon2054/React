import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "68729cab7caf56576b9a8fa7aefd4f6e",
    language: "en-US"
  }
});

export default api;
