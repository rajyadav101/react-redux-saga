import { takeLatest, all, takeEvery } from "redux-saga/effects";
import * as storeTypes from "../actions/types/storeActionTypes";
import { loadUser, addition } from "./storeSaga";

export function* watchStore() {
    console.log("load user callled");
    yield all([takeLatest(storeTypes.LOAD_USERS, loadUser)]);
    yield all([takeLatest(storeTypes.ADDITION, addition)]);
}
