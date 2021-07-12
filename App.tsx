import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import AppNavigator from "./app/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
	return (
		<NavigationContainer>
			<AppNavigator />
			<StatusBar />
			<OfflineNotice />
			<FlashMessage />
		</NavigationContainer>
	);
}
