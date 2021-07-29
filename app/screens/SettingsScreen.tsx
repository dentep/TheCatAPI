import ThemeController from "../components/ThemeController";
import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Alert,
} from "react-native";
import AppText from "../components/Text";
import Screen from "../components/Screen";
import { useTheme } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import * as languageActions from "../store/actions/languageActions";
import { useSelector } from "react-redux";
import { ILanguageState } from "../models/reducers/language";
import i18n from "i18n-js";
import { Restart } from "../config/restart";

const data = [
	{ id: 0, lang: "ru", title: "Русский" },
	{ id: 1, lang: "zh", title: "中文" },
	{ id: 2, lang: "en", title: "English" },
];

interface IState {
	languageReducer: ILanguageState;
}

function SettingsScreen() {
	const { colors } = useTheme();
	const dispatch = useDispatch();
	const language = useSelector((state: IState) => state.languageReducer.lang);
	const [selectedLanguage, setSelectedLanguage] = useState(language);

	useEffect(() => {
		if (selectedLanguage !== language) {
			Restart();
		}
	}, [language]);

	//Alert.alert("", language);
	const onLanguageChange = (lang: string) => {
		dispatch(languageActions.setLanguage(lang));
	};

	const renderItem = ({ item }: { item: any }) => {
		const selected = language === item.lang;
		return (
			<TouchableOpacity onPress={() => onLanguageChange(item.lang)}>
				<View
					style={[
						styles.item,
						{
							backgroundColor: selected
								? colors.primary
								: colors.card,
						},
					]}
				>
					<AppText
						style={{
							color: selected ? "#ffffff" : colors.darkTextColor,
						}}
					>
						{item.title}
					</AppText>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<Screen style={styles.container}>
			<ThemeController />
			<View style={{ marginVertical: 20, marginHorizontal: 10 }}>
				<AppText
					style={{
						fontSize: 14,
						color: colors.darkTextColor,
						textAlign: "center",
						marginVertical: 10,
					}}
				>
					{i18n.t("languageText")}
				</AppText>
				<FlatList
					horizontal={true}
					renderItem={renderItem}
					keyExtractor={(item) => item.id.toString()}
					data={data}
				/>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 20,
	},
	item: {
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 10,
		padding: 10,
		borderRadius: 10,
		height: 50,
		width: 100,
	},
});

export default SettingsScreen;
