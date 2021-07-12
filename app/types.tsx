import ImageView from "./components/ImageView";

export type BottomTabParamList = {
	BreedsNavigator: undefined;
	Favourites: undefined;
};

export type BreedStackParamList = {
	Breeds: undefined;
	Breed: { item: BreedItem };
};

export type BreedItem = {
	id: string;
	name: string;
	image?: ImageType;
	description: string;
};

export type FavouritesItem = {
	created_at: string;
	id: number;
	image_id: string;
	sub_id?: string;
	user_id: string;
	image: ImageType;
};

export type ImageType = {
	url?: string;
	id: string;
};
