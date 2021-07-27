import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function Screen({ children, style }: { children: any; style?: any }) {
	return <View style={[styles.view, style]}>{children}</View>;
}

const styles = StyleSheet.create({
	view: {
		backgroundColor: colors.backgroundColor,
		paddingTop: Constants.statusBarHeight,
		flex: 1,
		paddingBottom: 100,
	},
});

export default Screen;
