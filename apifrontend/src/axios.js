import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withXSRFToken = true;
axios.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
