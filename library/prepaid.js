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

export const inquiryPln = async (username, key, customerId) => {
  try {
    const url = endpoint.PREPAID_ENDPOINT + "inquiry-pln";

    const payload = {
      username,
      customer_id: customerId,
      sign: crypto
        .createHash("md5")
        .update(`${username}${key}${customerId}`)
        .digest("hex")
    };

    return (await axios.post(url, payload)).data;
  } catch (error) {
    console.error(error);
  }
};

export const inquiryGame = async (username, key, customerId, gameCode) => {
  try {
    const url = endpoint.PREPAID_ENDPOINT + "inquiry-game";

    const payload = {
      username,
      customer_id: customerId,
      game_code: gameCode,
      sign: crypto
        .createHash("md5")
        .update(`${username}${key}${gameCode}`)
        .digest("hex")
    };

    return (await axios.post(url, payload)).data;
  } catch (error) {
    console.error(error);
  }
};

export const inquiryGameServer = async (username, key, gameCode) => {
  try {
    const url = endpoint.PREPAID_ENDPOINT + "inquiry-game-server";

    const payload = {
      username,
      game_code: gameCode,
      sign: crypto
        .createHash("md5")
        .update(`${username}${key}${gameCode}`)
        .digest("hex")
    };

    return (await axios.post(url, payload)).data;
  } catch (error) {
    console.error(error);
  }
};

export const checkStatus = async (username, key, refId) => {
  try {
    const url = endpoint.PREPAID_ENDPOINT + "check-status";

    const payload = {
      username,
      ref_id: refId,
      sign: crypto
        .createHash("md5")
        .update(`${username}${key}${refId}`)
        .digest("hex")
    };

    return (await axios.post(url, payload)).data;
  } catch (error) {
    console.error(error);
  }
};

export const topUp = async (username, key, refId, customerId, productCode) => {
  try {
    const url = endpoint.PREPAID_ENDPOINT + "top-up";

    const payload = {
      username,
      ref_id: refId,
      customer_id: customerId,
      product_code: productCode,
      sign: crypto
        .createHash("md5")
        .update(`${username}${key}${refId}`)
        .digest("hex")
    };

    return (await axios.post(url, payload)).data;
  } catch (error) {
    console.error(error);
  }
};
