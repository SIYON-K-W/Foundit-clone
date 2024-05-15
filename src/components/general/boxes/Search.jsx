import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import ClickCategory from "./ClickCategory";
import { CiSearch } from "react-icons/ci";
import Searchpart from "../parts of search/Searchpart";
import Categorypart from "../parts of search/Categorypart";
import Searchbutton from "../parts of search/Searchbutton";

function Search() {
	return (
		<>
			<div className="grow">
				<form className="bg-white flex items-center h-14 rounded-full pl-4 pr-2 py-2 justify-between">
					<div className="h-full w-5/12 border-r-2">
						<Searchpart placeholding={"search for jobs"} />
					</div>
					<div className="w-5/12">
						<Categorypart />
					</div>
					<Searchbutton
						clas={"py-3 px-12 rounded-full"}
						ele={"search"}
					/>
				</form>
			</div>
		</>
	);
}

export default Search;
