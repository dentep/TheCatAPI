import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { BottomTabParamList } from "../types";
import FavouritesScreen from "../screens/FavouritesScreen";
import { StyleSheet, View, ViewStyle } from "react-native";
import Icon from "../components/Icon";
import BreedsNavigator from "./BreedsNavigator";
import ShadowBox from "../components/Shadows/ShadowBox";
import SettingsScreen from "../screens/SettingsScreen";
import { useTheme } from "@react-navigation/native";

const Tabs = createBottomTabNavigator<BottomTabParamList>();

function TabBarIcon(props: { name: any; focused: boolean; size: any }) {
	const { focused } = props;
	const { colors } = useTheme();
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: colors.card,
			}}
		>
			<ShadowBox
				inner={focused}
				useSvg
				style={{
					shadowOffset: { width: 3, height: 3 },
					shadowOpacity: 0.8,
					shadowColor: colors.tabShadow,
					shadowRadius: 3,
					borderRadius: 25,
					backgroundColor: colors.card,
					width: 50,
					height: 50,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Icon
					{...props}
					color={focused ? colors.tabIcon : colors.medium}
				/>
			</ShadowBox>
		</View>
	);
}

export default function BottomTabNavigator() {
	const { colors } = useTheme();
	console.log(colors);
	return (
		<Tabs.Navigator
			initialRouteName="BreedsNavigator"
			tabBarOptions={{
				activeTintColor: colors.background,
				inactiveTintColor: colors.background,
				showLabel: false,
				style: styles.tabbar,
			}}
		>
			<Tabs.Screen
				name="BreedsNavigator"
				component={BreedsNavigator}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							size={25}
							focused={focused}
							name="home-outline"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="Favourites"
				component={FavouritesScreen}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							size={25}
							focused={focused}
							name="heart-outline"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							size={25}
							focused={focused}
							name="account"
						/>
					),
				}}
			/>
		</Tabs.Navigator>
	);
}

interface Style {
	tabbar: ViewStyle;
}

const styles = StyleSheet.create<Style>({
	tabbar: {
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		position: "absolute",
		bottom: 0,
		padding: 10,
		width: "100%",
		minHeight: 100,
		zIndex: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 24,
	},
});
