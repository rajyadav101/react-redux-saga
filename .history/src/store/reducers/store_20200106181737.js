import * as storeTypes from "../actions/types/storeActionTypes";

const initialState = {
    users: [],
    total: 0
};

const storeReducer = (state = initialState, action) => {
    console.log("store reducer called");
    switch (action.type) {
        case storeTypes.LOAD_USERS:
            return {
                ...state,
                users: action.data
            };
            break;
        case storeTypes.ADDITION:
            return {
                ...state,
                total: action.data
            };
        default:
            return state;
    }
};

export default storeReducer;
