import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Save any data (object/string/number) into AsyncStorage
 * @param {string} key
 * @param {*} value
 */
const addDataToStorage = async (key, params) => {
    try {
        const jsonValue = JSON.stringify(params);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        return false;
    }
}

/**
 * Get any data (object/string/number) from AsyncStorage
 * @param {string} key
 * @returns {*}
 */
const getDataFromStorage = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (e) {
        return null;
    }
}

/**
 * Remove any data from AsyncStorage
 * @param {string} key
 * @returns {boolean}
 */
const removeDataFromStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
}

/** * Clear all data from AsyncStorage
 * @returns {boolean}
 */
const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
        return true;
    } catch (e) {
        return false;
    }
}

export default DBManager = {
    addDataToStorage,
    getDataFromStorage,
    removeDataFromStorage,
    clearStorage
};