import axios from "axios";
import React, { useEffect, useState } from "react";

export const useFetch = (request) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchApi();
		setLoading(false);
	}, []);

	const fetchApi = async () => {
		try {
			const data = await axios.get(request.url);
			const datajson = await data;
			setData(datajson);
		} catch (error) {
			console.log(error);
			setError(true);
		}
	};
	return { loading, error, data };
};
