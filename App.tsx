import { StatusBar } from "expo-status-bar";
import React from "react";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/navigation/AppNavigator";
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";

import { ActivityIndicator } from "react-native";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider as PaperProvider } from "react-native-paper";

import {
	PaperThemeDefault,
	PaperThemeDark,
	CombinedDefaultTheme,
	CombinedDarkTheme,
} from "./app/config/theme-config";
import configureStore from "./app/store";
import { IThemeState } from "./app/models/reducers/theme";
import { navigationRef } from "./app/navigation/NavigationService";

interface IState {
	themeReducer: IThemeState;
}

const RootNavigation: React.FC = () => {
	const isDark = useSelector((state: IState) => state.themeReducer.isDark);
	const paperTheme = isDark ? PaperThemeDark : PaperThemeDefault;
	const combinedTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;

	return (
		<PaperProvider theme={paperTheme}>
			<NavigationContainer ref={navigationRef}>
				<AppNavigator />
				<OfflineNotice />
				<StatusBar style="auto" />
				<FlashMessage />
			</NavigationContainer>
		</PaperProvider>
	);
};

export default function App() {
	const { persistor, store } = configureStore();

	return (
		<Provider store={store}>
			<PersistGate loading={<ActivityIndicator />} persistor={persistor}>
				<RootNavigation />
			</PersistGate>
		</Provider>
	);
}
