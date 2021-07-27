import React from "react";
import {
	View,
	TouchableOpacity,
	GestureResponderEvent,
	StyleSheet,
} from "react-native";
import Icon from "./Icon";
import { useTheme } from "@react-navigation/native";

function BackButton({
	onPress,
	style,
}: {
	onPress: (event: GestureResponderEvent) => void;
	style?: {};
}) {
	const { colors } = useTheme();
	return (
		<View
			style={[
				styles.container,
				style,
				{ backgroundColor: colors.primary },
			]}
		>
			<TouchableOpacity onPress={onPress}>
				<Icon name="chevron-left" size={30} color={`#ffffff`} />
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
