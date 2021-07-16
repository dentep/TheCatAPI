import { FavouritesItem } from "../types";
import { ContextActions } from "./contextActions";
import { ContextTypes } from "./contextTypes";

export const favouritesReducer = (
	state: FavouritesItem[],
	action: ContextActions
) => {
	switch (action.type) {
		case ContextTypes.Delete:
			return [
				...state.filter((product) => product.id !== action.payload.id),
			];
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
		case ContextTypes.Replace:
			return action.payload;
		default:
			return state;
	}
};
