import client from "./client";

const endpoint = "/favourites";

const postFavourite = (id: string) => client.post(endpoint, { image_id: id });
const getFavourites = () => client.get(endpoint);

export default {
	getFavourites,
	postFavourite,
};
