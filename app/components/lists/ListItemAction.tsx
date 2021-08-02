import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "../Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

interface Props {
	onPress: () => void;
	iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
	iconBackgroundColor: string;
	iconColor: string;
}

function ListItemAction(props: Props) {
	const { onPress, iconName, iconColor } = props;
	const { colors } = useTheme();
	return (
		<View style={{ width: 70, height: "100%", justifyContent: "center" }}>
			<TouchableOpacity onPress={onPress}>
				<View
					style={[
						styles.container,
						{ backgroundColor: colors.danger }
					]}
				>
					<Icon name={iconName} size={50} color={iconColor} />
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 70,
		height: 70,
		borderRadius: 35,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default ListItemAction;
