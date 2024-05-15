import React from "react";
import { Link } from "react-router-dom";

function FooterHidden({ namedata }) {
	return (
		<ul className="w-full hidden hiddendata px-4">
			{namedata.map((element) => (
				<li className="py-1">
					<Link className="text-sm text-white capitalize font-custom1">
						{element}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default FooterHidden;
