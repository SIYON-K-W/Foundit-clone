import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import ClickCategory from "./ClickCategory";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Searchpart from "../parts of search/Searchpart";
import Categorypart from "../parts of search/Categorypart";
import Searchbutton from "../parts of search/Searchbutton";

function Search() {
	return (
		<>
			<div className="grow">
				<form className="bg-white flex items-center h-14 rounded-full pl-4 pr-2 py-2 gap-3">
					<div className="h-full border-r-2 w-1/2">
						<Searchpart placeholding={"search for jobs"} />
					</div>
					<div className="h-full">
						<div
							className={
								"flex items-center gap-3 h-full border-r-2"
							}>
							<MdOutlineLocationOn className="text-2xl text-[#a59d9d]" />
							<input
								type="text"
								placeholder="Location"
								disabled
								className="h-full border-none outline-none w-full text-base font-custom1 bg-white"
							/>
						</div>
					</div>
					<div className="h-full">
						<Categorypart />
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
