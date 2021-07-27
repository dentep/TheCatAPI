import React from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-native-paper";

import * as themeActions from "../store/actions/themeActions";
import { IThemeState } from "../models/reducers/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IState {
	themeReducer: IThemeState;
}

const ThemeController: React.FC = () => {
	const isDark = useSelector((state: IState) => state.themeReducer.isDark);

	const dispatch = useDispatch();
	const onToggleTheme = () => dispatch(themeActions.setIsDarkTheme(!isDark));
	const iconName = isDark ? "weather-night" : "white-balance-sunny";
	const iconColor = isDark ? "white" : "black";

	return (
		<View style={styles.container}>
			<Switch value={isDark} onValueChange={onToggleTheme} />
			<MaterialCommunityIcons
				name={iconName}
				size={20}
				style={styles.icon}
				color={iconColor}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		margin: 12,
	},
	icon: { marginLeft: 4 },
});

export default ThemeController;
