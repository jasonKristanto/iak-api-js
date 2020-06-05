"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pricelist = exports.checkBalance = undefined;

var _config = require("../config/config");

var crypto = require("crypto");
var axios = require("axios");

var checkBalance = exports.checkBalance = async function checkBalance(username, key) {
  try {
    var url = _config.endpoint.PREPAID_ENDPOINT + "check-balance";

    var payload = {
      username: username,
      sign: crypto.createHash("md5").update("" + username + key + "bl").digest("hex")
    };

    return (await axios.post(url, payload)).data;
  } catch (error) {
    console.error(error);
  }
};

var pricelist = exports.pricelist = async function pricelist(username, key, status) {
  try {
    var url = _config.endpoint.PREPAID_ENDPOINT + "pricelist";

    var payload = {
      username: username,
      sign: crypto.createHash("md5").update("" + username + key + "pl").digest("hex"),
      status: status
    };

    return (await axios.post(url, payload)).data;
  } catch (error) {
    console.error(error);
  }
};