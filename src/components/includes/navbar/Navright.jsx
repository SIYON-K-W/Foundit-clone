import React from "react";
import LSbutton from "../../general/button/LSbutton";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useLog } from "../../context/Logincontext";
import LogoutButton from "../../general/button/LogoutButton";
function Navright({ regcol }) {
	const { logined } = useLog();
	return (
		<>
			{logined ? (
				<LogoutButton />
			) : (
				<>
					<div
						className={`flex items-center gap-4 ${
							regcol ? "max-5xl:hidden" : "max-4xl:hidden"
						}`}>
						<LSbutton
							border={"1px solid #9a10bd"}
							colour={"text-purple-700"}
							icon={<FaRegUserCircle />}
							type={"login"}
							where={{ type: "link", path: "/auth/Login" }}
							background={"bg-transparent"}
						/>
						<LSbutton
							icon={<FaRegUser />}
							type={"register"}
							where={{ type: "link", path: "/auth/Register" }}
							background="bg-orange-500"
						/>
						<div className="w-px py-5 bg-gray-400"></div>
						<LSbutton
							type={"employers login"}
							colour={"text-slate-700"}
							where={{ type: "link", path: "/auth/Register" }}
						/>
					</div>
					<div
						className={`flex items-center gap-4 ${
							regcol ? "5xl:hidden" : "4xl:hidden"
						}`}>
						<LSbutton
							icon={<FaRegUser />}
							type={"register"}
							where={{ type: "link", path: "/auth/Register" }}
							colour={regcol}
						/>
					</div>
				</>
			)}
		</>
	);
}

export default Navright;
