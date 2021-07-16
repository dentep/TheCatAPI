import React from "react";
import { View, StyleSheet, Image, ViewProps } from "react-native";
import { ImageType } from "../types";
import blankImage from "../assets/noImage.png";
import ActivityIndicator from "./ActivityIndicator";

type ImageView = {
	image?: ImageType;
	onLoadStart: () => void;
	onLoadEnd: () => void;
	width: number;
	isImageLoading: boolean;
	style?: any;
};

function ImageView(props: ImageView) {
	const { image, onLoadStart, onLoadEnd, width, isImageLoading, style } =
		props;

	//console.log("image in image view");
	//console.log(image?.url);

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

const styles = StyleSheet.create({
	image: {
		borderRadius: 20,
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
});

export default ImageView;
