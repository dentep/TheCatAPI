import ThemeController from "../components/ThemeController";
import React from "react";
import { View, StyleSheet } from "react-native";

function SettingsScreen() {
	return (
		<View style={styles.container}>
			<ThemeController />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default SettingsScreen;
