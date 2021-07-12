import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BreedStackParamList } from "../types";
import { RouteProp } from "@react-navigation/native";
import { AppText } from "../components/Text";
import BackButton from "../components/BackButton";
import AppButton from "../components/Button";
import ImageView from "../components/ImageView";
import breedsApi from "../api/breeds";
import useApi from "../hooks/useApi";
import ScrollViewHeader from "../components/ScrollViewHeader";
import favouritesApi from "../api/favourites";
import { showMessage } from "react-native-flash-message";

type ProfileScreenNavigationProp = StackNavigationProp<
	BreedStackParamList,
	"Breed"
>;
type ProfileScreenRouteProp = RouteProp<BreedStackParamList, "Breed">;

type Props = {
	route: ProfileScreenRouteProp;
	navigation: ProfileScreenNavigationProp;
};

function BreedScreen({ route, navigation }: Props) {
	//state to control image loader
	const [isImageLoading, setImageLoading] = useState(false);
	//props destructure
	const { image, id, name, description } = route.params.item;
	//calculation for image size (-40 is the padding of '20' for each side)
	const imageSize = Dimensions.get("window").width - 40;
	//api fetch for another image
	const getBreedImageApi = useApi(breedsApi.getBreedImage);
	//api add to favourites
	const postFavouriteImage = useApi(favouritesApi.postFavourite);
	//displaying cat image
	const [catImage, setCatImage] = useState(image);

	//меняем фото если была нажата кнопка "другое фото"
	useEffect(() => {
		if (getBreedImageApi.data && getBreedImageApi.data[0]) {
			setCatImage(getBreedImageApi.data[0]);
		}
	}, [getBreedImageApi.data]);

	//еще фото
	const onFetchAnotherImage = async () => {
		getBreedImageApi.request(id);
	};

	//todo: Проверка на имеющуюся фотографию в "избранных"
	const onPostFavourite = async () => {
		if (catImage && catImage.id) {
			const result = await postFavouriteImage.request(catImage.id);
			if (result.ok) {
				return showMessage({
					message: "Добавлено",
					description: "Вы успешно добавили фотографию в избранное!",
					type: "success",
				});
			}
		}
		showMessage({
			message: "Ошибка",
			description:
				"Что-то пошло не так. Пожалуйста, попробуйте еще раз или попробуйте поменять фотографию",
			type: "danger",
		});
		//const result = await postFavouriteImage.request();
	};

	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollContainer}>
				<ScrollViewHeader />
				<BackButton
					style={{ left: 0, marginBottom: 30 }}
					onPress={() => navigation.goBack()}
				/>
				<ImageView
					style={styles.imageBox}
					width={imageSize}
					image={catImage}
					isImageLoading={isImageLoading}
					onLoadStart={() => setImageLoading(true)}
					onLoadEnd={() => setImageLoading(false)}
				/>
				<AppText style={styles.title}>{name}</AppText>
				<AppText style={styles.subtitle}>{description}</AppText>
				<View style={styles.buttonBox}>
					<AppButton
						labelStyle={{ fontSize: 14 }}
						label={`Другое Фото`}
						onPress={() => onFetchAnotherImage()}
					/>
					<AppButton
						labelStyle={{ fontSize: 14 }}
						label={`Добавить в избранное`}
						onPress={() => onPostFavourite()}
					/>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	scrollContainer: {
		width: "100%",
		height: "100%",
		paddingHorizontal: 20,
	},
	container: {
		flex: 1,
		paddingBottom: 100,
	},
	buttonBox: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 8,
	},
	imageBox: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,

		elevation: 12,
	},
	title: {
		fontSize: 24,
		fontWeight: "600",
		marginVertical: 24,
	},
	subtitle: {
		fontSize: 16,
		marginVertical: 8,
	},
});

export default BreedScreen;
