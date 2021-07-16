import * as React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BreedStackParamList } from "../types";
import useApi from "../hooks/useApi";
import breedsApi from "../api/breeds";
import { useEffect } from "react";
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import BreedsListItem from "../components/lists/BreedsListItem";

type ProfileScreenNavigationProp = StackNavigationProp<
	BreedStackParamList,
	"Breeds"
>;

type Props = {
	navigation: ProfileScreenNavigationProp;
};

export default function BreedsScreen({ navigation }: Props) {
	const getBreedsApi = useApi(breedsApi.getBreeds);

	useEffect(() => {
		getBreedsApi.request();
	}, []);

	const renderItem = ({ item }: { item: any }) => (
		<BreedsListItem
			item={item}
			onPress={() => navigation.navigate("Breed", { item: item })}
		/>
	);

	return (
		<View style={styles.container}>
			<Screen>
				{getBreedsApi.loading ? (
					<ActivityIndicator visible={getBreedsApi.loading} />
				) : (
					<FlatList
						windowSize={10}
						data={getBreedsApi.data}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
					/>
				)}
			</Screen>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
