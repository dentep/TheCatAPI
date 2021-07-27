import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	GestureResponderEvent,
} from "react-native";
import { AppText } from "../Text";
import { BreedItem } from "../../types";
import ImageView from "../ImageView";
import { Styles } from "../../config/styles";
import { useTheme } from "@react-navigation/native";

function BreedsListItem({
	item,
	onPress,
}: {
	item: BreedItem;
	onPress: (event: GestureResponderEvent) => void;
}) {
	const [isImageLoading, setImageLoading] = useState(false);
	const { name, image, description } = item;
	const { colors } = useTheme();

	return (
		<View style={[styles.card, { backgroundColor: colors.card }]}>
			<TouchableOpacity
				onPress={onPress}
				style={{ flexDirection: "row" }}
			>
				<ImageView
					isImageLoading={isImageLoading}
					width={120}
					image={image}
					onLoadStart={() => setImageLoading(true)}
					onLoadEnd={() => setImageLoading(false)}
				/>
				<View style={{ flex: 1, marginLeft: 20 }}>
					<AppText
						style={[styles.title, { color: colors.darkTextColor }]}
					>
						{name}
					</AppText>
					<AppText
						numLines={2}
						style={[
							styles.subtitle,
							{ color: colors.darkTextColor },
						]}
					>
						{description}
					</AppText>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create<Styles>({
	card: {
		flex: 1,
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
		//backgroundColor: colors.white,
		padding: 10,
		marginVertical: 10,
		marginHorizontal: 8,
		borderRadius: 8,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 5.49,

		elevation: 8,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
		marginTop: 4,
		marginBottom: 30,
	},
	subtitle: {
		fontSize: 16,
		marginVertical: 4,
	},
});

export default BreedsListItem;
