import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Searchpart({ placeholding, read, clas }) {
	const [searchjob, setSearchJob] = useState("");
	return (
		<div className={`flex items-center gap-3 h-full ${clas}`}>
			<CiSearch className="text-2xl" />
			{read ? (
				<input
					type="text"
					placeholder={`${placeholding}`}
					onChange={(e) => setSearchJob(e.target.value)}
					className="h-full border-none outline-none w-full text-base font-custom1"
					readOnly
				/>
			) : (
				<input
					type="text"
					placeholder={`${placeholding}`}
					onChange={(e) => setSearchJob(e.target.value)}
					className="h-full border-none outline-none w-full text-base font-custom1"
				/>
			)}
		</div>
	);
}

export default Searchpart;
