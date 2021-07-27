export type BottomTabParamList = {
	BreedsNavigator: undefined;
	Favourites: undefined;
	Settings: undefined;
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

export type FavoritesItem = {
	created_at?: string;
	id: number;
	image: ImageType;
	image_id?: string;
	sub_id?: any;
	user_id?: string;
};

export type ImageType = {
	url?: string;
	id: string;
};
