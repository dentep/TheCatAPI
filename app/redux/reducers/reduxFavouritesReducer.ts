import { ContextActions } from "../../context/contextActions";
import { ContextTypes } from "../../context/contextTypes";
import { FavouritesItem } from "../../types";

export const initialState: FavouritesItem[] = [];

export const reduxFavouritesReducer = (
	state: FavouritesItem[] = initialState,
	action: ContextActions
) => {
	switch (action.type) {
		case ContextTypes.Add:
			return [
				...state,
				{
					created_at: action.payload.created_at,
					id: action.payload.id,
					image: action.payload.image,
					image_id: action.payload.image_id,
					sub_id: action.payload.sub_id,
					user_id: action.payload.user_id,
				},
			];
		case ContextTypes.Delete:
			return [
				...state.filter(
					(favourite) => favourite.id !== action.payload.id
				),
			];
		case ContextTypes.Replace:
			return action.payload;
		default:
			return state;
	}
};
