import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Icon = {
	color: string;
	size: number;
	name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
};
function Icon(props: Icon) {
	const { size, color, name } = props;
	return <MaterialCommunityIcons color={color} size={size} name={name} />;
}

export default Icon;
