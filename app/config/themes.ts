import {
	DarkTheme,
	DefaultTheme,
	ExtendedTheme,
	Theme
} from "@react-navigation/native";

export const DarkThemeApp: ExtendedTheme = {
	dark: true,
	colors: {
		//defaults for themes
		...DarkTheme.colors,
		primary: "#00478f",
		background: "#181919",
		card: "#333333",
		text: "#FFFFFF",
		border: "transparent",
		notification: "#FF00FF",
		dark: "#fcfcfc",
		medium: "#9a9a9a",
		mediumLight: "#2c2c2c",
		mediumLightL: "#c3c3c3",
		light: "#202020",

		tabShadow: "#000000",
		tabIcon: "#2e5984",

		brightTextColor: "#0c0c0c",
		mediumTextColor: "#cccccc",
		darkTextColor: "#ffffff",
		danger: "#fc5c65"
	}
};

export const LightThemeApp: ExtendedTheme = {
	dark: true,
	colors: {
		//defaults for themes
		...DarkTheme.colors,
		primary: "#00478f",
		background: "#f5f7fa",
		card: "#ffffff",
		text: "#0C0C0C",
		border: "transparent",
		notification: "#FF0000",
		dark: "#0c0c0c",
		mediumLight: "#808080",
		medium: "#6e6969",
		mediumLightL: "#d9d9d9",
		light: "#e9e9e9",

		tabShadow: "#999",
		tabIcon: "#00478f",

		brightTextColor: "#ffffff",
		mediumTextColor: "#6e6969",
		darkTextColor: "#0c0c0c",
		danger: "#fc5c65"
	}
};
