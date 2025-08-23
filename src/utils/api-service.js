const axios = require('axios');

const apiClient = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API base URL
    timeout: 10000, // Request timeout
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

    },
});


/**
 * Get request
 * @param {*} url 
 * @returns 
 */
const doGet = (url) => {
    return apiClient.get(url);
}

/**
 * Post request
 * @param {*} url 
 * @param {*} params 
 * @returns 
 */
const doPost = (url, params) => {
    return apiClient.post(url, params);
};

/**
 * Put request
 * @param {*} url 
 * @param {*} params 
 * @returns 
 */
const doPut = (url, params) => {
    return apiClient.put(url, params);
}

/**
 * Delete request
 * @param {*} url
 * @return {*} 
 */
const doDelete = (url) => {
    return apiClient.delete(url);
}

module.exports.ApiManager = {
    apiClient,
    doGet,
    doPost,
    doPut,
    doDelete
}