import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "6f3f6fa9d19c80b404bab46d46ae2dad",
    language: "ko",
  },
});

export default api;
