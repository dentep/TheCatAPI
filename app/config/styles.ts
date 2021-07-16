import { Platform, ViewStyle, TextStyle, ImageStyle } from "react-native";
import colors from "./colors";

export interface Styles {
	title?: TextStyle;
	subtitle?: TextStyle;
	label?: TextStyle;
	text?: TextStyle;

	image?: ImageStyle;

	overlay?: ViewStyle;
	container?: ViewStyle;
}

export default {
	colors,
	text: {
		color: colors.dark,
		fontSize: 18,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
};
