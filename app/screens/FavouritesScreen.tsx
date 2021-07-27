import React, { useCallback, useState } from "react";
import { StyleSheet, FlatList, ListRenderItem, View } from "react-native";
import Screen from "../components/Screen";
import { useDispatch, useSelector } from "react-redux";
import * as favoriteItemsActions from "../store/actions/favoriteItemsActions";
import { IFavoriteItems } from "../models/reducers/favoriteItems";
import { FavoritesItem } from "../types";
import FavoritesListItem from "../components/lists/FavoritesListItem";
import NoDataIndicator from "../components/NoDataIndicator";
import useApi from "../hooks/useApi";
import favouritesApi from "../api/favourites";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/Button";
import { useTheme } from "@react-navigation/native";

interface IState {
	favoriteItemsReducer: IFavoriteItems;
}

export default function FavouritesScreen() {
	const dispatch = useDispatch();
	const { colors } = useTheme();
	const [refreshing, setRefreshing] = useState(false);
	const getFavouritesApi = useApi(favouritesApi.getFavourites);
	const items = useSelector(
		(state: IState) => state.favoriteItemsReducer.items
	);

	const onRefresh = useCallback(() => {
		updateData();
	}, []);

	//if screen is refreshed => fetch => update context values
	const updateData = async () => {
		setRefreshing(true);
		const result = await getFavouritesApi.request();
		setRefreshing(false);
		if (result.ok) {
			dispatch(favoriteItemsActions.replaceFavItems(result.data));
		}
	};

	const renderItem: ListRenderItem<FavoritesItem> = ({ item }) => (
		<FavoritesListItem item={item} />
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
						{items.length > 0 ? (
							<FlatList
								refreshing={refreshing}
								onRefresh={onRefresh}
								data={items}
								renderItem={renderItem}
								keyExtractor={(item) => item.id.toString()}
							/>
						) : (
							<View
								style={{
									flex: 1,
									justifyContent: "center",
									alignItems: "center",
									marginBottom: 20,
								}}
							>
								<NoDataIndicator />
								<AppButton
									buttonStyle={{ marginHorizontal: 20 }}
									backgroundColor={colors.primary}
									label={`Перезагрузить`}
									onPress={() => onRefresh()}
								/>
							</View>
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
