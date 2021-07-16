import { StatusBar } from "expo-status-bar";
import React from "react";
import AppNavigator from "./app/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";
import OfflineNotice from "./app/components/OfflineNotice";
import { AppProvider } from "./app/context/AppContext";
import { createStore } from "redux";
import rootReducer from "./app/redux/reducers";
import { Provider } from "react-redux";

export default function App() {
	const store = createStore(rootReducer);

	return (
		<AppProvider>
			<Provider store={store}>
				<NavigationContainer>
					<AppNavigator />
					<StatusBar />
					<OfflineNotice />
					<FlashMessage />
				</NavigationContainer>
			</Provider>
		</AppProvider>
	);
}
