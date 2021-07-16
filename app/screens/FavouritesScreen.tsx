import React, { useCallback, useContext, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types";
import useApi from "../hooks/useApi";
import favouritesApi from "../api/favourites";
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import FavouritesListItem from "../components/lists/FavouritesListItem";
import NoDataIndicator from "../components/NoDataIndicator";
import AppButton from "../components/Button";
import { AppContext } from "../context/AppContext";
import { ContextTypes } from "../context/contextTypes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { Styles } from "../config/styles";
import { AppText } from "../components/Text";

type Props = BottomTabScreenProps<BottomTabParamList, "Favourites">;

export default function FavouritesScreen({ route, navigation }: Props) {
	const getFavouritesApi = useApi(favouritesApi.getFavourites);
	const [refreshing, setRefreshing] = useState(false);

	//from redux
	const reduxFavourites = useSelector(
		(state: RootState) => state.reduxFavReducer
	);
	const reduxDispatch = useDispatch();

	//useReducer + useContext()
	const { state, dispatch } = useContext(AppContext);

	const onRefresh = useCallback(() => {
		updateData();
	}, []);

	//if screen is refreshed => fetch => update context values
	const updateData = async () => {
		setRefreshing(true);
		const result = await getFavouritesApi.request();
		setRefreshing(false);
		if (result.ok) {
			dispatch({ type: ContextTypes.Replace, payload: result.data });
			reduxDispatch({ type: ContextTypes.Replace, payload: result.data });
		}
	};

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
						{reduxFavourites.length > 0 ? (
							<FlatList
								refreshing={refreshing}
								onRefresh={onRefresh}
								data={state.favourites}
								renderItem={renderItem}
								keyExtractor={(item) => item.id.toString()}
							/>
						) : (
							<View
								style={{
									flex: 1,
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<NoDataIndicator />
								<AppButton
									buttonStyle={{
										marginHorizontal: 20,
										marginVertical: 20,
									}}
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

const styles = StyleSheet.create<Styles>({
	container: {
		flex: 1,
	},
});
