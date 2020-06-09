const crypto = require("crypto");
const axios = require("axios");

import {endpoint} from "../config/config";

const axiosConfig = {
    'Content-Type': 'application/json'
};

function getBaseUrl(env) {
    return env.toLowerCase() === 'prod' ? endpoint.POSTPAID_PROD_ENDPOINT : endpoint.POSTPAID_SANDBOX_ENDPOINT;
}

function getMainUrl(env) {
    return getBaseUrl(env) + 'api/v1/bill/check';
}

function getReceiptUrl(env, tr_id) {
    return getBaseUrl(env) + 'api/v1/download/' + tr_id + '/1';
}

function hashSign(username, key, salt) {
    return crypto
        .createHash("md5")
        .update(`${username}${key}${salt}`)
        .digest("hex")
}

function sendRequest(method, config = null, url, payload = null) {
    let param;

    if (method.toUpperCase() === 'POST') {
        param = {
            method: method,
            headers: config,
            url: url,
            data: payload
        };
    } else {
        param = {
            method: method,
            url: url
        };
    }

    return axios(param).then(response => {
        return response.data;
    });
}

export const pricelist = async (env, username, key, status) => {
    try {
        const commands = 'pricelist-pasca';

        const url = getMainUrl(env);

        const payload = {
            commands,
            username,
            sign: hashSign(username, key, 'pl'),
            status
        };

        return await sendRequest('POST', axiosConfig, url, payload);
    } catch (error) {
        console.error(error);
    }
};

export const inquiry = async (env, username, key, code, hp, ref_id) => {
    try {
        const url = getMainUrl(env);

        const commands = 'inq-pasca';

        const payload = {
            commands,
            username,
            sign: hashSign(username, key, ref_id),
            code,
            hp,
            ref_id
        };

        return await sendRequest('POST', axiosConfig, url, payload);
    } catch (error) {
        console.error(error);
    }
};

export const payment = async (env, username, key, tr_id) => {
    try {
        const url = getMainUrl(env);

        const commands = 'pay-pasca';

        const payload = {
            commands,
            username,
            sign: hashSign(username, key, tr_id),
            tr_id
        };

        return await sendRequest('POST', axiosConfig, url, payload);
    } catch (error) {
        console.error(error);
    }
};

export const checkstatus = async (env, username, key, ref_id) => {
    try {
        const url = getMainUrl(env);

        const commands = 'checkstatus';

        const payload = {
            commands,
            username,
            sign: hashSign(username, key, 'cs'),
            ref_id
        };

        return await sendRequest('POST', axiosConfig, url, payload);
    } catch (error) {
        console.error(error);
    }
};

export const receipt = async (env, tr_id) => {
    try {

        const url = getReceiptUrl(env, tr_id)

        return await sendRequest('GET', null, url);
    } catch (error) {
        console.error(error);
    }
};
