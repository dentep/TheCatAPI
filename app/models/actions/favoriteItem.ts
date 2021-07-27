import { FavoritesItem } from "../../types";

export interface IAddFavoriteItemState {
	type: String;
	payload: FavoritesItem;
}

export interface IReplaceFavoriteItemState {
	type: String;
	payload: FavoritesItem[];
}
