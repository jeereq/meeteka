
import axios from "axios";

const API = axios.create({
  baseURL: `https://meeteka-api-send-mail.onrender.com/api/`,
  timeout: 1000000
});

export default API;
