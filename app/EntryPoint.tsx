import { StatusBar } from "expo-status-bar";
import React from "react";
import OfflineNotice from "./components/OfflineNotice";
import AppNavigator from "./navigation/AppNavigator";
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";

import { ActivityIndicator } from "react-native";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./store";
import { IThemeState } from "./models/reducers/theme";
import { ILanguageState } from "./models/reducers/language";
import { navigationRef } from "./navigation/NavigationService";
import { DarkThemeApp, LightThemeApp } from "./config/themes";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { zh, en, ru } from "./config/localization/languages";

i18n.fallbacks = true;
i18n.translations = { en, zh, ru };

interface IState {
	themeReducer: IThemeState;
	languageReducer: ILanguageState;
}

const RootNavigation: React.FC = () => {
	const isDark = useSelector((state: IState) => state.themeReducer.isDark);
	const language = useSelector((state: IState) => state.languageReducer.lang);
	const theme = isDark ? DarkThemeApp : LightThemeApp;

	//setting language
	i18n.locale = language !== undefined ? language : Localization.locale;

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
