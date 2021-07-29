/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest, put } from "redux-saga/effects";
import * as types from "../actions/types";
import loginSaga from "./loginSaga";
import languageSaga from "./languageSaga";
import * as languageActions from "../actions/languageActions";

export default function* watch() {
	yield put(languageActions.setLanguage("ru"));
	//yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
}
