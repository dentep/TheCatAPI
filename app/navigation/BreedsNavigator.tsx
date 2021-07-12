import React from "react";
import { View, StyleSheet } from "react-native";
import BreedsScreen from "../screens/BreedsScreen";
import BreedScreen from "../screens/BreedScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { BreedStackParamList } from "../types";
import colors from "../config/colors";

const Stack = createStackNavigator<BreedStackParamList>();

const menuOptions = (title: string, headerShown: boolean = true) => {
	return {
		title: title,
		headerShown: headerShown,
		headerBackTitle: "",
		headerTruncatedBackTitle: "",
		headerBackTitleStyle: {
			color: colors.white,
			fontSize: 18,
		},
		headerTintColor: colors.white,
		headerTitleStyle: {
			color: colors.white,
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

const styles = StyleSheet.create({
	container: {},
});
