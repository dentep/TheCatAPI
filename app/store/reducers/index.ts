/*
 * combines all th existing reducers
 */
import * as loadingReducer from "./loadingReducer";
import * as loginReducer from "./loginReducer";
import * as themeReducer from "./themeReducer";
import * as favoriteItemsReducer from "./favoriteItemsReducer";
import * as languageReducer from "./languageReducer";

export default Object.assign(
	loginReducer,
	loadingReducer,
	themeReducer,
	favoriteItemsReducer,
	languageReducer
);
