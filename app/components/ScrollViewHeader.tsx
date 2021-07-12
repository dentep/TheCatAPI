import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

//используем компонент чтобы получить нативную передачу для scrollview (без обрезания шапки)
function ScrollViewHeader() {
	return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
	container: {
		height: Constants.statusBarHeight,
		width: "100%",
	},
});

export default ScrollViewHeader;
