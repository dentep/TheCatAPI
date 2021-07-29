// export action creators
import * as loginActions from "./loginActions";
import * as navigationActions from "./navigationActions";
import * as themeActions from "./themeActions";
import * as languageActions from "./languageActions";
import * as favoriteItemsAction from "./favoriteItemsActions";

export const ActionCreators = Object.assign(
	{},
	loginActions,
	navigationActions,
	themeActions,
	languageActions,
	favoriteItemsAction
);
