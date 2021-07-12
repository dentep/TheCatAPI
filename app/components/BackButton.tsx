import React from "react";
import {
	View,
	TouchableOpacity,
	GestureResponderEvent,
	StyleSheet,
	ViewProps,
} from "react-native";
import colors from "../config/colors";
import Icon from "./Icon";

function BackButton({
	onPress,
	style,
}: {
	onPress: (event: GestureResponderEvent) => void;
	style?: {};
}) {
	return (
		<View style={[styles.container, style]}>
			<TouchableOpacity onPress={onPress}>
				<Icon name="chevron-left" size={30} color={colors.white} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginVertical: 10,
		backgroundColor: colors.primary,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,

		elevation: 12,
	},
});

export default BackButton;
