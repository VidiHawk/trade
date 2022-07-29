import { retry, authentication } from "currency-cloud";

const API_KEY = process.env.REACT_APP_API_KEY;
const LOGIN_ID = process.env.REACT_APP_LOGIN_ID;
const ENV = process.env.REACT_APP_ENV;

const opts = {
  retries: 3,
  factor: 2,
  minTimeout: Math.random() * 750,
  maxTimeout: Math.random() * 30000 + 30000,
  randomize: true,
  log: true,
};

export const login = () => {
  return retry(
    () => {
      return authentication.login({
        environment: ENV,
        loginId: LOGIN_ID,
        apiKey: API_KEY,
      });
    },
    opts,
    "currencyCloud.authentication.login"
  );
};

export const logout = () => {
  return authentication.logout().then(() => {
    console.log("logout\n");
  });
};
