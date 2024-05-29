import React, { useEffect, useState } from "react";
import Searchpart from "../../../general/parts of search/Searchpart";
import Location from "../../../general/parts of search/Location";
import Categorypart from "../../../general/parts of search/Categorypart";
import Searchbutton from "../../../general/parts of search/Searchbutton";
import { FiSearch } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useSearch } from "../../../context/SearchContext";

function Navform() {
	const { searchjob, setSearchJob, searchit } = useSearch();

	return (
		<div className="h-[38px] grow border flex justify-center items-center pr-1 pl-3 py-1 rounded-full max-3xl:hidden">
			<form
				className="flex justify-between items-center h-full w-full"
				onSubmit={searchit}>
				<div className="border-r h-full w-[30%]">
					<Searchpart
						placeholding={"Search For Jobs"}
						icon={false}
						inputcls={"text-sm"}
					/>
				</div>
				<div className="border-r h-full w-[30%]">
					<Location icon={false} clas={"text-sm"} />
				</div>
				<div className="h-full w-[30%]">
					<Categorypart icon={false} cls={"top-[34px] left-0"} />
				</div>
				<div className="">
					<Searchbutton
						ele={<FiSearch />}
						clas={"py-2 px-2 rounded-full bg-[#6E00BE]"}
					/>
				</div>
			</form>
		</div>
	);
}

export default Navform;
