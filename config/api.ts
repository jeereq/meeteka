
import axios from "axios";
import { API as APILINK } from ".";

const TOKEN =
  "210e8ed00cc8e9e65d607a3f2ea0f29aa49540937245631a69325d5d84d0320f82df6cd8f3d303aeda68ed4f735c3828d9a87adf07e8a2c01f58db7bb40b749f256817621bbd2b8e9defacdf43a0d8155a371c644c1b968796fdf4e8f8e9ac79a3567244fe8c77c058b6d577ac64d042e48b398a7fe551bcc24097b4cf602995";

const API = axios.create({
  baseURL: `${APILINK}/api/`,
  timeout: 1000000,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export default API;
