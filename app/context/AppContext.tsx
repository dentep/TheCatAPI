import React, { createContext, useReducer } from "react";
import { FavouritesItem } from "../types";
import { ContextActions } from "./contextActions";
import { favouritesReducer } from "./contextReducer";

type InitialStateType = {
	favourites: FavouritesItem[];
};

const initialState = {
	favourites: [],
};

const AppContext = createContext<{
	state: InitialStateType;
	dispatch: Function;
}>({
	state: initialState,
	dispatch: () => null,
});

const favReducer = (
	{ favourites }: InitialStateType,
	action: ContextActions
) => ({
	favourites: favouritesReducer(favourites, action),
});

const AppProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(favReducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };
