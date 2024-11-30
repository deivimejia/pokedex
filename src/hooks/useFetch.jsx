import axios from 'axios';
import React, { useState } from 'react';

function useFetch() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const dataFetch = (url) => {
		setLoading(true);
		axios
			.get(url)
			.then((resp) => {
				setData(resp.data);
			})
			.catch((error) => setError(error.message))
			.finally(() => {
				setLoading(false);
			});
	};
	return [data, dataFetch, loading, error];
}

export { useFetch };
