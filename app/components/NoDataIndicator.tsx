import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "./Text";
import { useTheme } from "@react-navigation/native";

function NoDataIndicator() {
	const { colors } = useTheme();
	return (
		<View style={styles.container}>
			<AppText style={[styles.text, { color: colors.mediumTextColor }]}>
				Нет Данных
			</AppText>
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
	},
});

export default NoDataIndicator;
