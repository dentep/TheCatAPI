import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "./Text";
import { useTheme } from "@react-navigation/native";
import i18n from "i18n-js";

function NoDataIndicator() {
	const { colors } = useTheme();
	return (
		<View style={styles.container}>
			<AppText style={[styles.text, { color: colors.mediumTextColor }]}>
				{i18n.t("noData")}
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
