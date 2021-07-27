import React from "react";
import { View, StyleSheet } from "react-native";
import BreedsScreen from "../screens/BreedsScreen";
import BreedScreen from "../screens/BreedScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { BreedStackParamList } from "../types";
import { useTheme } from "@react-navigation/native";

const Stack = createStackNavigator<BreedStackParamList>();

const menuOptions = (title: string, headerShown: boolean = true) => {
	const { colors } = useTheme();
	return {
		title: title,
		headerShown: headerShown,
		headerBackTitle: "",
		headerTruncatedBackTitle: "",
		headerBackTitleStyle: {
			color: "#ffffff",
			fontSize: 18,
		},
		headerTintColor: "#ffffff",
		headerTitleStyle: {
			color: "#ffffff",
			fontSize: 20,
		},
		headerStyle: {
			backgroundColor: colors.primary,
		},
	};
};

export default function BreedsNavigator() {
	return (
		<Stack.Navigator initialRouteName="Breeds">
			<Stack.Screen
				name="Breeds"
				component={BreedsScreen}
				options={menuOptions("Личный Кабинет", false)}
			/>
			<Stack.Screen
				name="Breed"
				component={BreedScreen}
				options={menuOptions("", false)}
			/>
		</Stack.Navigator>
	);
}
