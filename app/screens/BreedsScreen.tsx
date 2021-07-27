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
import { Styles } from "../config/styles";
import NavigationService from "../navigation/NavigationService";

export default function BreedsScreen() {
	const getBreedsApi = useApi(breedsApi.getBreeds);

	useEffect(() => {
		getBreedsApi.request();
	}, []);

	const renderItem = ({ item }: { item: any }) => (
		<BreedsListItem
			item={item}
			onPress={() => NavigationService.navigate("Breed", { item: item })}
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

const styles = StyleSheet.create<Styles>({
	container: {
		flex: 1,
	},
});
