import axios from "axios";

// export const localApi = axios.create({ baseURL: "http://localhost:3335" });

export const api = axios.create({
  baseURL: "https://kenzie-hamburgueria-bg.herokuapp.com/",
});
