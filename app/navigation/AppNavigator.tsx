import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { BottomTabParamList } from "../types";
import FavouritesScreen from "../screens/FavouritesScreen";
import colors from "../config/colors";
import { StyleSheet, View, ViewStyle } from "react-native";
import Icon from "../components/Icon";
import BreedsNavigator from "./BreedsNavigator";
import ShadowBox from "../components/Shadows/ShadowBox";

const Tabs = createBottomTabNavigator<BottomTabParamList>();

function TabBarIcon(props: { name: any; focused: boolean; size: any }) {
	const { focused } = props;
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: colors.tabBackground,
			}}
		>
			<ShadowBox
				inner={focused}
				useSvg
				style={{
					shadowOffset: { width: 3, height: 3 },
					shadowOpacity: 0.8,
					shadowColor: "#999",
					shadowRadius: 3,
					borderRadius: 25,
					backgroundColor: colors.tabBackground,
					width: 50,
					height: 50,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Icon
					{...props}
					color={focused ? colors.primary : colors.medium}
				/>
			</ShadowBox>
		</View>
	);
}

export default function BottomTabNavigator() {
	return (
		<Tabs.Navigator
			initialRouteName="BreedsNavigator"
			tabBarOptions={{
				activeTintColor: colors.primary,
				inactiveTintColor: colors.medium,
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
		</Tabs.Navigator>
	);
}

interface Style {
	tabbar: ViewStyle;
}

const styles = StyleSheet.create<Style>({
	tabbar: {
		borderTopLeftRadius: 21,
		borderTopRightRadius: 21,
		backgroundColor: colors.tabBackground,
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
