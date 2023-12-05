import axios from "axios";

export const api = axios.create({
  baseURL: "https://myfoodexplorer-api-36q8.onrender.com"
});

// api.get("/users:id")