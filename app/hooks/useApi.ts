import { useState } from "react";

const useApi = (apiFunc: Function) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const request = async (...args: any) => {
		setLoading(true);
		const response = await apiFunc(...args);
		setLoading(false);

		setError(!response.ok);
		setData(response.data);
		return response;
	};

	return { data, error, loading, request };
};

export default useApi;

/*
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { useDispatch } from "react-redux";
import * as actions from "../actions";

const useApi = (apiFunc: Function) => {
	const data = useSelector((state: RootState) => state.dataReducer);
	const error = useSelector((state: RootState) => state.errorReducer);
	const loading = useSelector((state: RootState) => state.loadingReducer);
	const dispatch = useDispatch();

	const request = async (...args: any) => {
		dispatch(actions.setLoading(true));
		const response = await apiFunc(...args);
		dispatch(actions.setLoading(false));

		dispatch(actions.setError(!response.ok));
		dispatch(actions.setData(response.data));
		return response;
	};

	return { data, error, loading, request };
};

export default useApi;

*/
