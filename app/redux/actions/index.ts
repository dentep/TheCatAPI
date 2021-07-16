import { ContextTypes } from "../../context/contextTypes";
import { FavouritesItem } from "../../types";

export const addFavourite = (listItem: FavouritesItem) => {
	return {
		type: ContextTypes.Add,
		payload: listItem,
	};
};

export const deleteFavourite = (listItem: FavouritesItem) => {
	return {
		type: ContextTypes.Delete,
		payload: listItem,
	};
};

export const replaceFavourite = (list: FavouritesItem[]) => {
	return {
		type: ContextTypes.Replace,
		payload: list,
	};
};
