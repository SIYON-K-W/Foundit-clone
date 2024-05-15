import React from "react";
import { Link } from "react-router-dom";

function Hoverbox({ data }) {
	return (
		<ul className="absolute bg-white z-50 border-2 py-4 px-4 rounded-lg hidden group-hover:block group-hover:animate-wiggle">
			{data.map((Element) => (
				<li>
					<Link
						to={"/"}
						className="whitespace-nowrap capitalize pl-2.5 rounded pr-12 py-3 text-sm font-thin font-custom1 hover:text-purple-700 hover:bg-purple-100 block">
						{Element}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default Hoverbox;
