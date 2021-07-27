import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { AppText } from "./Text";

function NoDataIndicator() {
	return (
		<View style={styles.container}>
			<AppText style={styles.text}>Нет Данных</AppText>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 24,
		fontWeight: "500",
		fontStyle: "italic",
		color: colors.medium,
	},
});

export default NoDataIndicator;
