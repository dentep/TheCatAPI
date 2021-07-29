/*
 * Reducer actions related with login
 */
import * as types from "./types";

export function setLanguage(value: string) {
	return {
		type: types.CHANGE_LANGUAGE,
		lang: value,
	};
}
