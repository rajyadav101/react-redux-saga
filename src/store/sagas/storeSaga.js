import { put } from "redux-saga/effects";
import * as actions from "../actions/index";
import user from "../api";

export function* loadUser() {
    yield put(actions.startLoading());
    try {
        //console.log("response", api);
        const response = yield user.getUser();
        if (response.ok) {
            console.log("response", response);
            yield put(actions.setUser(response.data.hits));
        } else {
            console.log("Response error", response);
        }
    } catch (error) {
        console.log("catch called");
        // yield put(actions.authFail(error));
    } finally {
        yield put(actions.endLoading());
    }
}

export function* addition() {
    try {
        console.log("try called");
    } catch (error) {
        console.log("catch called");
        // yield put(actions.authFail(error));
    } finally {
        console.log("Finally called");
    }
}
