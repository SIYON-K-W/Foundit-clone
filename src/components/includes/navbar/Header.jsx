import React, { useEffect, useState } from "react";
import NavLeft from "./NavLeft";
import Navright from "./Navright";
import Maindata from "../../general/navbar/Maindata";
import Searchpart from "../../general/parts of search/Searchpart";

function Header() {
	return (
		<Maindata
			clas={
				"bg-white 4xl:shadow-xl 4xl:rounded-b-2xl fixed max-4xl:bg-[#4D0085] max-4xl:static"
			}>
			<div className="flex items-center justify-between">
				<NavLeft />
				<Navright />
			</div>
		</Maindata>
	);
}

export default Header;
