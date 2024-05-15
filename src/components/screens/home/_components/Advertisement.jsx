import React from "react";
import { Link } from "react-router-dom";

function Advertisement() {
	return (
		<div className="flex items-center justify-center">
			<div className="w-7/12 rounded-md max-3xl:w-auto">
				<Link to={"/"} className="w-full h-full">
					<img
						src="/src/assets/images/centre.jpg"
						alt="LMTindtree"
						className="w-full h-full rounded-2xl max-xl:hidden"
					/>
					<img
						src="/src/assets/images/centre2.jpg"
						alt="LMTindtree"
						className="w-full h-full rounded-2xl xl:hidden"
					/>
				</Link>
			</div>
		</div>
	);
}

export default Advertisement;
