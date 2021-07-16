import { reduxFavouritesReducer } from "./reduxFavouritesReducer";
import { combineReducers } from "redux";

//initialize combine just in case for new ones to come later
const rootReducer = combineReducers({
	reduxFavReducer: reduxFavouritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
