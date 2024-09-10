import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create();
instance.defaults.timeout = 60000;

instance.defaults.baseURL = "https://chokro-backend-api.vercel.app/graphql";

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = typeof window !== "undefined" && Cookies.get("accessKey");
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { instance };