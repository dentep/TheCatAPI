import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";
import loaderFile from "../assets/animations/loader.json";
import activityFile from "../assets/animations/activity.json";

function ActivityIndicator({
	visible = false,
	source = "activity",
}: {
	source?: string;
	visible: boolean;
}) {
	if (!visible) return null;

	const renderSwitch = (param: string) => {
		switch (param) {
			case "activity":
				return activityFile;
			case "loader":
				return loaderFile;
			default:
				return activityFile;
		}
	};

	return (
		<View style={styles.overlay}>
			<LottieView autoPlay loop source={renderSwitch(source)} />
		</View>
	);
}

const styles = StyleSheet.create({
	overlay: {
		justifyContent: "center",
		position: "absolute",
		backgroundColor: "transparent",
		height: "100%",
		opacity: 1,
		width: "100%",
		zIndex: 1,
	},
});

export default ActivityIndicator;
