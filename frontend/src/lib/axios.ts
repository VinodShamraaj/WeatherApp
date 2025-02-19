import { setupCache } from "axios-cache-interceptor";
import axios from "axios";

const axiosInstance = setupCache(axios.create(), {
  ttl: 60 * 1000, // Time-to-live for cache (60 seconds)
});

export default axiosInstance;
