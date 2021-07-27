import {
	DarkTheme as PaperDarkTheme,
	DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import {
	DefaultTheme as NavigationDefaultTheme,
	DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";

declare global {
	namespace ReactNativePaper {
		interface ThemeColors {
			tabbar: string;
		}
	}
}

export const PaperThemeDefault = {
	...PaperDefaultTheme,
	colors: {
		...PaperDefaultTheme.colors,
		primary: "#3498db",
		danger: "#fc5c65",
		tabbar: "#ff0000",
	},
};

export const PaperThemeDark = {
	...PaperDarkTheme,
	colors: {
		...PaperDarkTheme.colors,
		primary: "#3498db",
		danger: "#fc5c65",
		tabbar: "#ff0000",
	},
};

export const CombinedDefaultTheme = {
	...PaperDefaultTheme,
	...NavigationDefaultTheme,
	colors: {
		...NavigationDarkTheme.colors,
		background: "#f5f7fa",
		card: "#FFFFFF",
		text: "#1C1C1C",
		dark: "#0c0c0c",
		mediumLight: "#808080",
		medium: "#6e6969",
		mediumLightL: "#d9d9d9",
		light: "#e9e9e9",

		tabbar: "#ff0000",
	},
};

export const CombinedDarkTheme = {
	...PaperDarkTheme,
	...NavigationDarkTheme,
	colors: {
		...NavigationDarkTheme.colors,
		background: "#181919",
		card: "#222222",
		text: "#ffffff",
		dark: "#fcfcfc",
		medium: "#9a9a9a",
		mediumLight: "#2c2c2c",
		mediumLightL: "#c3c3c3",
		light: "#202020",

		tabbar: "#ff0000",
	},
};
