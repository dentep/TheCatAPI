import React from "react";
import { View, StyleSheet, Image, ViewStyle, StyleProp } from "react-native";
import { ImageType } from "../types";
import blankImage from "../assets/noImage.png";
import ActivityIndicator from "./ActivityIndicator";
import { Styles } from "../config/styles";

type ImageView = {
	image?: ImageType;
	onLoadStart: () => void;
	onLoadEnd: () => void;
	width: number;
	isImageLoading: boolean;
	style?: StyleProp<ViewStyle>;
};

function ImageView(props: ImageView) {
	const { image, onLoadStart, onLoadEnd, width, isImageLoading, style } =
		props;

	return (
		<View style={[style, styles.container]}>
			{image ? (
				<Image
					onLoadStart={onLoadStart}
					onLoad={onLoadEnd}
					onLoadEnd={onLoadEnd}
					style={[styles.image, { width, height: width }]}
					source={image.url ? { uri: image.url } : blankImage}
				/>
			) : (
				<Image
					onLoadStart={onLoadStart}
					onLoad={onLoadEnd}
					onLoadEnd={onLoadEnd}
					style={[styles.image, { width, height: width }]}
					source={blankImage}
				/>
			)}
			{isImageLoading && (
				<View
					style={{
						width,
						height: width,
						position: "absolute",
					}}
				>
					<ActivityIndicator
						source={`loader`}
						visible={isImageLoading}
					/>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create<Styles>({
	image: {
		borderRadius: 20,
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
});

export default ImageView;
