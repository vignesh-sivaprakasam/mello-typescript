// export const domain = protocol + "//mello-server.herokuapp.com";
const DEV = "http://localhost:1337";
const PROD = "https://mello-typescript-node.herokuapp.com";

const isDev = window.location.hostname === "localhost";
export const DOMAIN = isDev ? DEV : PROD;
