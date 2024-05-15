import React from "react";
import Logo from "./Logo";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import LSbutton from "../../general/button/LSbutton";
import Maindata from "../../general/navbar/Maindata";
import { useLog } from "../../context/Logincontext";
import LogoutButton from "../../general/button/LogoutButton";

function AuthenticateNavbar() {
	const path = window.location.pathname;
	const { logined } = useLog();
	console.log(path);
	return (
		<Maindata clas={"border-b"}>
			<div className="flex justify-between items-center">
				<Logo blue={true} />
				{logined ? (
					<LogoutButton />
				) : path === "/auth/Login" ? (
					<LSbutton
						icon={<FaUserEdit />}
						type={"register"}
						background="bg-orange-500"
						where={{ type: "link", path: "/auth/Register" }}
						border={"1px solid orange"}
					/>
				) : (
					<LSbutton
						border={"1px solid #9a10bd"}
						colour={"text-purple-700"}
						icon={<FaRegUserCircle />}
						type={"login"}
						where={{ type: "link", path: "/auth/Login" }}
						background={"bg-transparent"}
					/>
				)}
			</div>
		</Maindata>
	);
}

export default AuthenticateNavbar;
