import * as React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import defaultStyles from "../config/styles";

interface AppText {
	props?: Text;
	style?: StyleProp<TextStyle>;
	children: React.ReactNode;
	numLines?: number;
}

export function AppText(props: AppText) {
	const { children, style, numLines } = props;
	return (
		<Text
			ellipsizeMode="tail"
			numberOfLines={numLines}
			allowFontScaling={false}
			style={[defaultStyles.text, style]}
		>
			{children}
		</Text>
	);
}

export default AppText;
