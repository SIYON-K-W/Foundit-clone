import { useState, useEffect } from "react";

const useAxiosConfig = (Baseurli, aim, obj) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await Baseurli.post(aim, obj);
				const responseData = response.data;
				setData(responseData);
				setError(null);
			} catch (error) {
				console.error("Error fetching data:", error);
				setError(error);
				setData(null);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	return { data, isLoading, error };
};

export default useAxiosConfig;
