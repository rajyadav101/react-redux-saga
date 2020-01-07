import * as storeTypes from "../actions/types/storeActionTypes";

const initialState = {
    users: [],
    total: 0
};

const storeReducer = (state = initialState, action) => {
    console.log("store reducer called", action);
    switch (action.type) {
        case storeTypes.LOAD_USERS:
            return {
                ...state,
                users: action.data
            };
            break;
        case storeTypes.SET_USER:
            return {
                ...state,
                users: action.data
            };
            break;
        case storeTypes.ADDITION:
            return {
                ...state,
                total: state.total + action.data
            };
        default:
            return state;
    }
};

export default storeReducer;
