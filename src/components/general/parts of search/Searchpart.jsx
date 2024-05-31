import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

function Searchpart({ placeholding, read, clas, icon = true, inputcls }) {
	const { searchjob, setSearchJob } = useSearch();
	const { name } = useParams();
	return (
		<div className={`flex items-center gap-3 h-full ${clas}`}>
			{icon && <FiSearch className="text-2xl text-[#a59d9d]" />}
			{read ? (
				<input
					type="text"
					placeholder={`${placeholding}`}
					value={searchjob !== null && name ? searchjob : null}
					className="h-full border-none outline-none w-full text-base font-custom1"
					readOnly
				/>
			) : (
				<input
					type="text"
					placeholder={`${placeholding}`}
					onChange={(e) => setSearchJob(e.target.value)}
					value={searchjob !== null && name ? searchjob : null}
					required
					className={`h-full border-none outline-none w-full text-base font-custom1 ${inputcls}`}
				/>
			)}
		</div>
	);
}

export default Searchpart;
