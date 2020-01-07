import * as storeTypes from "./types/storeActionTypes";

export const getUser = () => {
    return {
        type: storeTypes.LOAD_USERS
    };
};
export const setUser = data => {
    return {
        type: storeTypes.SET_USER,
        data
    };
};
export const addition = data => {
    return {
        type: storeTypes.ADDITION,
        data
    };
};
