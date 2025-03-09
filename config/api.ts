
import axios from "axios";
import { API as APILINK } from ".";

const TOKEN =
  "000c5d107fdc6beb980b128f51df9263a8d31ae3e27d20f6fa1f831da84918c8b6509e12d6a1edca5204fa5b6392247532abaa0023928ce1fa6dce3556e5426731da422f0fe443ddbdf680118d551399cad1d3f32dc88166a5f80cd2c7473d74a9181141193b9ea636bdcd17d6c9e6da99af549c96fa06cbc0e8d82744fb821c";

const API = axios.create({
  baseURL: `${APILINK}/api/`,
  timeout: 1000000,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export default API;
