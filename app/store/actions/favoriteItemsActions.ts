/*
 * Reducer actions related with login
 */
import { FavoritesItem } from "../../types";
import * as types from "./types";

export function addFavItem(payload: FavoritesItem) {
	return {
		type: types.ADD_FAV_ITEM,
		payload,
	};
}

export function replaceFavItems(payload: FavoritesItem[]) {
	return {
		type: types.REPLACE_FAV_ITEM,
		payload,
	};
}

export function removeFavItem(id: string) {
	return {
		type: types.REMOVE_FAV_ITEM,
		id,
	};
}
