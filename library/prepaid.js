const crypto = require("crypto");
const axios = require("axios");

import { endpoint } from "../config/config";

export const checkBalance = async (username, key) => {
  try {
    const url = endpoint.PREPAID_ENDPOINT + "check-balance";

    const payload = {
      username,
      sign: crypto
        .createHash("md5")
        .update(`${username}${key}bl`)
        .digest("hex")
    };

    return (await axios.post(url, payload)).data;
  } catch (error) {
    console.error(error);
  }
};

export const pricelist = async (username, key, status) => {
  try {
    const url = endpoint.PREPAID_ENDPOINT + "pricelist";

    const payload = {
      username,
      sign: crypto
        .createHash("md5")
        .update(`${username}${key}pl`)
        .digest("hex"),
      status
    };

    return (await axios.post(url, payload)).data;
  } catch (error) {
    console.error(error);
  }
};
