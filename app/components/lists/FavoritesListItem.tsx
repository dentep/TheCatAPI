import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { FavoritesItem } from "../../types";
import ImageView from "../ImageView";
import { Dimensions } from "react-native";
import { Styles } from "../../config/styles";

function FavoritesListItem({ item }: { item: FavoritesItem }) {
	const [isImageLoading, setImageLoading] = useState(false);
	const { image } = item;
	const windowWidth = Dimensions.get("window").width - 20;

	return (
		<View style={styles.container}>
			<ImageView
				isImageLoading={isImageLoading}
				width={windowWidth}
				image={image}
				onLoadStart={() => setImageLoading(true)}
				onLoadEnd={() => setImageLoading(false)}
			/>
		</View>
	);
}

const styles = StyleSheet.create<Styles>({
	container: {
		borderRadius: 8,
		marginVertical: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 5.49,
		elevation: 8,
	},
});

export default FavoritesListItem;
