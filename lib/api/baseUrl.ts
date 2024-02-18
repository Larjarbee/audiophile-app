import axios from "axios";

export const audiophileApi = axios.create({
  baseURL: "http://localhost:4001",
});
