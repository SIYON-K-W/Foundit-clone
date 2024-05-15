import React from "react";
import { Link } from "react-router-dom";

function HoverboxSecond() {
	const data = [
		{
			head: "boost",
			headdata: [
				"featured profile",
				"profile highlighter",
				"resume writing",
				"resume builder",
				"linkedin makeover",
			],
		},
		{
			head: "prep",
			headdata: ["mock interview", "interview preparation"],
		},

		{
			head: "learn",
			headdata: ["udemy courses", "skill assesment", "degree programs"],
		},
		{
			head: "network",
			headdata: ["mentor connect"],
		},
	];
	return (
		<div className="absolute border-2 py-6 px-6 rounded-lg hidden group-hover:flex bg-white -left-44 group-hover:animate-wiggle z-30">
			{data.map((Element) => (
				<ul className="pr-10 pl-3 border-r-2 last:border-r-0">
					<li>
						<h4 className="capitalize font-semibold text-sm text-slate-700 pl-2.5 pb-2">
							{Element.head}
						</h4>
					</li>
					{Element.headdata.map((Element) => (
						<li>
							<Link className="whitespace-nowrap capitalize pl-2.5 rounded pr-10 py-2 text-sm font-custom1 hover:text-purple-700 hover:bg-purple-100 block">
								{Element}
							</Link>
						</li>
					))}
				</ul>
			))}
		</div>
	);
}

export default HoverboxSecond;
