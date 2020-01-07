import { put } from "redux-saga/effects";
import * as actions from "../actions/index";
export function* loadUser() {
    try {
        console.log("try called");
    } catch (error) {
        console.log("catch called");
        // yield put(actions.authFail(error));
    } finally {
        console.log("Finally called");
    }
}
