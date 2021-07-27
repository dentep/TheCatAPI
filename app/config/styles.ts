import { Platform, ViewStyle, TextStyle, ImageStyle } from "react-native";

export interface Styles {
	title?: TextStyle;
	subtitle?: TextStyle;
	label?: TextStyle;
	text?: TextStyle;

	image?: ImageStyle;

	overlay?: ViewStyle;
	container?: ViewStyle;
	card?: ViewStyle;
}

export default {
	text: {
		fontSize: 18,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
};
