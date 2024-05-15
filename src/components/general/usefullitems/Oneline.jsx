import React from "react";

function Oneline() {
	return (
		<div className="flex items-center gap-6 max-3xl:justify-center">
			<p className="w-fit text-base">
				Say <span className="text-purple-700">found it</span> every step
				of the way
			</p>
			<hr className="grow max-3xl:hidden" />
		</div>
	);
}

export default Oneline;
