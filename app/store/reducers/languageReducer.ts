import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";

import { ILanguageState } from "../../models/reducers/language";
import { ILanguageToggleAction } from "../../models/actions/language";

//change to locale
const initialState: ILanguageState = {
	lang: "en",
};

export const languageReducer = createReducer(initialState, {
	[types.CHANGE_LANGUAGE](
		state: ILanguageState,
		action: ILanguageToggleAction
	) {
		return { ...state, lang: action.lang };
	},
});
