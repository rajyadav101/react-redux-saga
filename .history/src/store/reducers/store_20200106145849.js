import * as storeTypes from "../actions/types/storeActionTypes";

const initialState = {
    users: [],
    addition: 0
};

const storeReducer = (state = initialState, action) => {
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
                users: action.data
            };
        default:
            return state;
    }
};

export default storeReducer;
