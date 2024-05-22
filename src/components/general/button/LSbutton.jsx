import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLog } from "../../context/Logincontext";

function LSbutton({
	icon,
	type,
	where,
	colour = "text-white",
	background,
	border,
}) {
	const { HandleLogin } = useLog();
	const navigate = useNavigate();
	const handlechange = (action) => {
		switch (action.type) {
			case "link":
				navigate(action.path);
				break;
			case "Log":
				HandleLogin({ type: "Logout" });
				break;
			default:
				break;
		}
	};
	return (
		<div
			className={`inline-block cursor-pointer rounded ${background} ${
				background ? "hover:shadow-lg" : ""
			}`}
			onClick={() => handlechange(where)}
			style={{ border: `${border}` }}>
			<ul
				className={`${
					background ? "px-3" : ""
				} py-2 flex gap-1 items-center`}>
				{icon && (
					<li className={`text-sm font-semibold ${colour}`}>
						{icon}
					</li>
				)}
				<li
					className={`text-sm font-semibold ${colour} capitalize whitespace-nowrap`}>
					{type}
				</li>
			</ul>
		</div>
	);
}

export default LSbutton;
