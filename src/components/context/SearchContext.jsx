import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const SearchContext = createContext();
function Searching({ children }) {
	const [Jobselect, setJobSelect] = useState();
	const [searchjob, setSearchJob] = useState("");
	const [type, setType] = useState("");
	const navigate = useNavigate();
	const searchit = (event) => {
		event.preventDefault();
		if (searchjob) {
			setType("search");
			navigate(`/Jobs/search/${searchjob}`);
		} else {
			console.warn("Please enter a search term.");
		}
	};
	return (
		<SearchContext.Provider
			value={{
				searchjob,
				setSearchJob,
				searchit,
				type,
				setType,
				Jobselect,
				setJobSelect,
			}}>
			{children}
		</SearchContext.Provider>
	);
}
export const useSearch = () => {
	const data = useContext(SearchContext);
	return data;
};
export default Searching;
