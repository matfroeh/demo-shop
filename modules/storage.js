// Storage functions

export function setLocalStorageItem(itemKey, itemValue) {
    return localStorage.setItem(itemKey, JSON.stringify(itemValue));
}

export function getLocalStorageFromSingleKey(itemKey) {
    return JSON.parse(localStorage.getItem(itemKey));
}