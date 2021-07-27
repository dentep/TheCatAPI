import { StatusBar } from "expo-status-bar";
import React from "react";
import OfflineNotice from "./components/OfflineNotice";
import AppNavigator from "./navigation/AppNavigator";
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";

import { ActivityIndicator } from "react-native";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider as PaperProvider } from "react-native-paper";
import configureStore from "./store";
import { IThemeState } from "./models/reducers/theme";
import { navigationRef } from "./navigation/NavigationService";
import { DarkThemeApp, LightThemeApp } from "./config/themes";

interface IState {
	themeReducer: IThemeState;
}

const RootNavigation: React.FC = () => {
	const isDark = useSelector((state: IState) => state.themeReducer.isDark);
	const theme = isDark ? DarkThemeApp : LightThemeApp;

	return (
		<NavigationContainer theme={theme} ref={navigationRef}>
			<AppNavigator />
			<OfflineNotice />
			<StatusBar style="auto" />
			<FlashMessage />
		</NavigationContainer>
	);
};

export default function EntryPoint() {
	const { persistor, store } = configureStore();

	return (
		<Provider store={store}>
			<PersistGate loading={<ActivityIndicator />} persistor={persistor}>
				<RootNavigation />
			</PersistGate>
		</Provider>
	);
}
