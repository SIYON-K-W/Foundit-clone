import React, { useEffect, useState } from "react";
import data from "../../../helpers/data.json";

function JobDescription({ id }) {
	const [Jobdata, setJObData] = useState([]);
	console.log(id);
	useEffect(() => {
		try {
			const filtereddata = data.filter((element) => element.id === id);
			setJObData(filtereddata);
		} catch (error) {
			console.log(error);
		}
	}, [id]);
	return (
		<>
			{Jobdata.map((element) => (
				<p>{element.id}</p>
			))}
		</>
	);
}

export default JobDescription;
