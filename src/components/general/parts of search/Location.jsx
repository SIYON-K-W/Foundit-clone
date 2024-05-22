import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";

function Location({ cls, icon = true, clas }) {
	return (
		<div className={`flex items-center gap-3 h-full pl-3 ${cls}`}>
			{icon && (
				<MdOutlineLocationOn className="text-2xl text-[#a59d9d]" />
			)}
			<input
				type="text"
				placeholder="Location"
				className={`h-full border-none outline-none w-full text-base font-custom1 bg-white ${clas}`}
			/>
		</div>
	);
}

export default Location;
