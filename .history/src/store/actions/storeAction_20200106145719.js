import * as storeTypes from "./types/storeActionTypes";

export const getPaymentInfo = () => {
    return {
        type: storeTypes.LOAD_USERS
    };
};

export const setPaymentInfo = data => {
    return {
        type: storeTypes.ADDITION,
        data
    };
};
