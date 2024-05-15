import React from "react";
import NavLeft from "./NavLeft";
import Navright from "./Navright";
import List from "./List";
import Logo from "./Logo";
import Maindata from "../../general/navbar/Maindata";

function SecondNavbar() {
	return (
		<Maindata>
			<div className="flex items-center justify-between">
				<div className="flex gap-4 items-center">
					<Logo />
					<List set={true} />
				</div>
				<Navright />
			</div>
		</Maindata>
	);
}

export default SecondNavbar;
