import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Styles } from "../config/styles";

//используем компонент чтобы получить нативную передачу для scrollview (без обрезания шапки)
function ScrollViewHeader() {
	return <View style={styles.container}></View>;
}

const styles = StyleSheet.create<Styles>({
	container: {
		height: Constants.statusBarHeight,
		width: "100%",
	},
});

export default ScrollViewHeader;
