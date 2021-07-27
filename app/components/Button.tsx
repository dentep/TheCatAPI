import React from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	GestureResponderEvent,
	ViewStyle,
} from "react-native";
import { AppText } from "./Text";

type AppButton = {
	onPress: (event: GestureResponderEvent) => void;
	label: string;
	backgroundColor?: string;
	labelStyle?: React.CSSProperties;
	buttonStyle?: ViewStyle;
};

function AppButton(props: AppButton) {
	const { backgroundColor, label, labelStyle, buttonStyle } = props;
	return (
		<TouchableOpacity onPress={props.onPress}>
			<View style={[styles.container, buttonStyle, { backgroundColor }]}>
				<AppText style={[styles.title, labelStyle]}>{label}</AppText>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingHorizontal: 20,
		paddingVertical: 15,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	title: {
		fontWeight: "500",
		color: "white",
	},
});

export default AppButton;
