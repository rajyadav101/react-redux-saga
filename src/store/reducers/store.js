import * as storeTypes from "../actions/types/storeActionTypes";

const initialState = {
    users: [],
    total: 0,
    loading: false
};

const storeReducer = (state = initialState, action) => {
    console.log("store reducer called", action);
    switch (action.type) {
        case storeTypes.LOAD_USERS:
            return {
                ...state,
                users: state.users
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
            break;
        case storeTypes.START_LOADING:
            return {
                ...state,
                loading: true
            };
            break;
        case storeTypes.END_LOADING:
            return {
                ...state,
                loading: false
            };
            break;
        default:
            return state;
    }
};

export default storeReducer;
