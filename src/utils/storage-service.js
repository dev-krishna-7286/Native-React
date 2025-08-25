import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Save any data (object/string/number) into AsyncStorage
 * @param {string} key
 * @param {any} value
 */
const addDataToStorage = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * Get any data (object/string/number) from AsyncStorage
 * @param {string} key
 * @returns {any}
 */
const getDataFromStorage = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key);
        let value = null;
        if (data) value = JSON.parse(data);
        return value;
    } catch (e) {
        return null;
    }
};

/**
 * Remove item from storage
 * @param {string} key
 */
export const removeDataFromStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
};

/** * Clear all data from AsyncStorage
 * @returns {boolean}
 */
export const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
        return true;
    } catch (e) {
        console.error("Error clearing storage:", e);
    }
};

export default DBManager = {
    addDataToStorage,
    getDataFromStorage,
    removeDataFromStorage,
    clearStorage
};