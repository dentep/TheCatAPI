import { create } from "apisauce";
import { showMessage } from "react-native-flash-message";

const apiClient = create({
	baseURL: "https://api.thecatapi.com/v1",
});

const token = "09de8ca5-7a96-45be-93cc-17c773195415";

apiClient.addAsyncRequestTransform(async (request) => {
	request.headers["x-api-key"] = token;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
	const response = await get(url, params, axiosConfig);

	if (response && response.ok) {
		return response;
	} else {
		return showMessage({
			message: "Ошибка",
			description:
				"Ошибка API. Пожалуйста проверьте соединение с интернетом или попробуйте еще раз.",
			type: "danger",
		});
	}
};

export default apiClient;
