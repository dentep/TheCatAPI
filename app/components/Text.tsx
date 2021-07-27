import * as React from "react";
import { Text } from "react-native";
import defaultStyles from "../config/styles";

type AppText = {
	props?: Text;
	style?: any;
	children: string;
	numLines?: number;
};

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
