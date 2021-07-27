import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import { IFavoriteItems } from "../../models/reducers/favoriteItems";
import {
	IAddFavoriteItemState,
	IReplaceFavoriteItemState,
} from "../../models/actions/favoriteItem";

const initialState: IFavoriteItems = {
	items: [],
};

export const favoriteItemsReducer = createReducer(initialState, {
	[types.ADD_FAV_ITEM](state: IFavoriteItems, action: IAddFavoriteItemState) {
		return {
			...state,
			items: [
				...state.items,
				{
					created_at: action.payload.created_at,
					id: action.payload.id,
					image: action.payload.image,
					image_id: action.payload.image_id,
					sub_id: action.payload.sub_id,
					user_id: action.payload.user_id,
				},
			],
		};
	},
	[types.REPLACE_FAV_ITEM](
		state: IFavoriteItems,
		action: IReplaceFavoriteItemState
	) {
		return { ...state, items: action.payload };
	},
});
