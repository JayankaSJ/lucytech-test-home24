export const publicUri = process.env.PUBLIC_URL;

export const isProduction = process.env.NODE_ENV === "production";
export const isDevelopment = process.env.NODE_ENV === "development";

export const apiBaseUri = process.env.REACT_APP_API_BASE_URI;

export const intlNumberFormatValues = ["de-DE", "currency", "EUR"];

export const HttpConfig = {
  baseURL: apiBaseUri,
  timeout: parseInt(process.env.REACT_APP_API_TIMEOUT || "1000"),
  headers: {},
};
