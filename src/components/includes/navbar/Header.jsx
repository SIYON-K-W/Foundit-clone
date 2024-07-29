import React, { useEffect, useState } from "react";
import NavbarLeftPart from "./NavbarLeftPart";
import NavbaRightPart from "./NavbaRightPart";
import Maindata from "../../general/navbar/Maindata";
import Searchpart from "../../general/parts of search/Searchpart";

function Header() {
	return (
		<Maindata
			clas={
				"bg-white 4xl:shadow-xl 4xl:rounded-b-2xl fixed max-4xl:bg-[#4D0085] max-4xl:static"
			}>
			<div className="flex items-center justify-between">
				<NavbarLeftPart />
				<NavbaRightPart />
			</div>
		</Maindata>
	);
}

export default Header;
