import React from "react";
import NavLeft from "./NavLeft";
import Navright from "./Navright";
import List from "./List";
import Logo from "./Logo";
import Maindata from "../../general/navbar/Maindata";
import Navform from "../../screens/jobs/jobcomponents/Navform";

function SecondNavbar() {
	return (
		<Maindata clas={"fixed bg-white border-b"}>
			<div className="flex items-center 3xl:gap-10 max-3xl:justify-between">
				<div className="flex gap-4 items-center">
					<Logo blue={true} />
					<List set={true} />
				</div>
				<Navform />
				<Navright regcol={"text-[#9a10bd]"} />
			</div>
		</Maindata>
	);
}

export default SecondNavbar;
