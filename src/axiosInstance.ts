import axios from "axios";

export const axiosTurtleApiInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export const axiosWordpressApiInstance = axios.create({
  baseURL:
    "https://public-api.wordpress.com/rest/v1.1/sites/missionseaturtlenest.wordpress.com",
});

export const axiosWordpressOauthBEInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_WP_COM_OAUTH_URL,
});
