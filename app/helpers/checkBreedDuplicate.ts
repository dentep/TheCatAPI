import { ImageType, FavoritesItem } from "../types";

interface Props {
	item: ImageType;
	items: FavoritesItem[];
}

//the function checks for duplicates in already existing array of favourite images
export const checkBreedDuplicate = (props: Props) => {
	const { item, items } = props;

	for (var i = 0; i < items.length; i++) {
		if (items[i].image.id === item.id) {
			return false;
		}
	}
	return true;
};
