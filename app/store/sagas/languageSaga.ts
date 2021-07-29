/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from "redux-saga/effects";
// import { delay } from 'redux-saga';

import * as languageActions from "../actions/languageActions";

// Our worker Saga that logins the user
export default function* languageAsync() {
	yield put(languageActions.setLanguage("ru"));
}
