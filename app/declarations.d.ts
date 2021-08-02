import "@react-navigation/native";

// Override the theme in react native navigation to accept our custom theme props.
declare module "@react-navigation/native" {
	export type ExtendedTheme = {
		dark: boolean;
		colors: {
			primary: string;
			background: string;
			card: string;
			text: string;
			border: string;
			notification: string;

			dark: string;
			mediumLight: string;
			medium: string;
			mediumLightL: string;
			light: string;

			tabShadow: string;
			tabIcon: string;

			brightTextColor: string;
			mediumTextColor: string;
			darkTextColor: string;

			danger: string;
		};
	};
	export function useTheme(): ExtendedTheme;
}

//declare module "redux-logger";
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
