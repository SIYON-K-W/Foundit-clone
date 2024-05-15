import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Hoverbox from "../../general/boxes/Hoverbox";
import HoverboxSecond from "../../general/boxes/HoverboxSecond";

function List({ set, clas }) {
	const data = [
		{
			name: "boost",
			namedata: [
				"featured profile",
				"profile highlighter",
				"resume writing",
				"resume builder",
				"linkedin makeover",
			],
		},
		{ name: "prep", namedata: ["mock interview", "interview preparation"] },
		{
			name: "learn",
			namedata: ["udemy courses", "skill assesment", "degree programs"],
		},
		{ name: "network", namedata: ["mentor connect"] },
	];
	return (
		<nav className={clas}>
			<ul className="flex gap-x-6 items-center">
				<li>
					<NavLink
						to={"/Jobs"}
						className={`${(isActive) =>
							isActive
								? "active"
								: ""} capitalize font-semibold text-sm 4xl:text-slate-700 cursor-pointer hover:underline decoration-2 underline-offset-4 hover:text-purple-700`}>
						jobs
					</NavLink>
				</li>
				{!set && (
					<>
						{data.map((Element) => (
							<li className="relative group">
								<span className="capitalize font-semibold text-sm 4xl:text-slate-700 cursor-pointer group-hover:underline decoration-2 underline-offset-4 group-hover:text-purple-700">
									{Element.name}
								</span>
								<Hoverbox data={Element.namedata} />
							</li>
						))}
					</>
				)}
				{set && (
					<li className="relative group">
						<Link
							to={"/"}
							className="capitalize font-semibold text-sm text-slate-700 cursor-pointer group-hover:underline decoration-2 underline-offset-4 group-hover:text-purple-700">
							service
						</Link>
						<HoverboxSecond />
					</li>
				)}
			</ul>
		</nav>
	);
}

export default List;
