import { FavouritesItem } from "../types";
import { ContextTypes } from "./contextTypes";

export type ContextActions =
	| { type: ContextTypes.Add; payload: FavouritesItem }
	| { type: ContextTypes.Delete; payload: FavouritesItem }
	| { type: ContextTypes.Replace; payload: FavouritesItem[] };
