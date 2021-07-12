import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types";
import useApi from "../hooks/useApi";
import favouritesApi from "../api/favourites";
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import FavouritesListItem from "../components/lists/FavouritesListItem";
import NoDataIndicator from "../components/NoDataIndicator";

type Props = BottomTabScreenProps<BottomTabParamList, "Favourites">;

export default function FavouritesScreen({ route, navigation }: Props) {
	const getFavouritesApi = useApi(favouritesApi.getFavourites);
	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		getFavouritesApi.request().then(() => setRefreshing(false));
	}, []);

	useEffect(() => {
		getFavouritesApi.request();
	}, []);

	const renderItem = ({ item }: { item: any }) => (
		<FavouritesListItem item={item} />
	);

	return (
		<View style={styles.container}>
			<Screen>
				{getFavouritesApi.loading ? (
					<ActivityIndicator
						visible={getFavouritesApi.loading}
						source={`activity`}
					/>
				) : (
					<>
						{getFavouritesApi.data ? (
							<FlatList
								refreshing={refreshing}
								onRefresh={onRefresh}
								data={getFavouritesApi.data}
								renderItem={renderItem}
								keyExtractor={(item) => item.id.toString()}
							/>
						) : (
							<NoDataIndicator />
						)}
					</>
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
