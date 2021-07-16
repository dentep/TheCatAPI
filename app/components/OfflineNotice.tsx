import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import AppText from "./Text";
import colors from "../config/colors";
import { Styles } from "../config/styles";

function OfflineNotice() {
	const netInfo = useNetInfo();

	if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
		return (
			<View style={styles.container}>
				<AppText style={styles.text}>
					Нет Соединения с Интернетом
				</AppText>
			</View>
		);

	return null;
}

const styles = StyleSheet.create<Styles>({
	container: {
		alignItems: "center",
		backgroundColor: colors.danger,
		height: 50,
		justifyContent: "center",
		position: "absolute",
		top: Constants.statusBarHeight,
		width: "100%",
		zIndex: 1,
	},
	text: {
		color: colors.white,
	},
});

export default OfflineNotice;
