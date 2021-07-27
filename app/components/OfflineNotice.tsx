import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import AppText from "./Text";
import { useTheme } from "@react-navigation/native";

function OfflineNotice() {
	const netInfo = useNetInfo();
	const { colors } = useTheme();

	if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
		return (
			<View
				style={[styles.container, { backgroundColor: colors.primary }]}
			>
				<AppText>Нет Соединения с Интернетом</AppText>
			</View>
		);

	return null;
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		height: 50,
		justifyContent: "center",
		position: "absolute",
		top: Constants.statusBarHeight,
		width: "100%",
		zIndex: 1,
	},
});

export default OfflineNotice;
