import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import ClickCategory from "./ClickCategory";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Searchpart from "../parts of search/Searchpart";
import Categorypart from "../parts of search/Categorypart";
import Searchbutton from "../parts of search/Searchbutton";
import Location from "../parts of search/Location";
import { useSearch } from "../../context/SearchContext";

function Search() {
	const { searchjob, setSearchJob, searchit } = useSearch();
	return (
		<>
			<div className="grow">
				<form
					className="bg-white flex items-center h-14 rounded-full pl-4 pr-2 py-2"
					onSubmit={searchit}>
					<div className="h-full border-r-2 w-1/2">
						<Searchpart placeholding={"Search For Jobs"} />
					</div>
					<div className="h-full border-r-2">
						<Location cls={""} />
					</div>
					<div className="h-full">
						<Categorypart cls={"top-14"} />
					</div>
					<Searchbutton
						clas={"py-3 px-11 rounded-full bg-[#6E00BE]"}
						ele={"search"}
					/>
				</form>
			</div>
		</>
	);
}

export default Search;
