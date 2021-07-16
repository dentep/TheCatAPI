import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View, ViewStyle, StyleProp } from "react-native";
import colors from "../config/colors";
import { Styles } from "../config/styles";

function Screen({
	children,
	style,
}: {
	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
}) {
	return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create<Styles>({
	container: {
		backgroundColor: colors.backgroundColor,
		paddingTop: Constants.statusBarHeight,
		flex: 1,
		paddingBottom: 100,
	},
});

export default Screen;
