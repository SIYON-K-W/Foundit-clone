import React from "react";
import LSbutton from "./LSbutton";
import { FaRegUserCircle } from "react-icons/fa";

function LogoutButton() {
	return (
		<LSbutton
			border={"1px solid #9a10bd"}
			colour={"text-purple-700"}
			icon={<FaRegUserCircle />}
			type={"logout"}
			where={{ type: "Log" }}
			background={"bg-white"}
		/>
	);
}

export default LogoutButton;
