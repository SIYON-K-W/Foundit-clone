import React from "react";
import CustomArrows from "../../../includes/slider/Slider";

function Companies() {
	const imgsource = [
		"/src/assets/images/sliderimage (1).jpeg",
		"/src/assets/images/sliderimage (2).jpeg",
		"/src/assets/images/sliderimage (3).jpeg",
		"/src/assets/images/sliderimage (4).jpeg",
		"/src/assets/images/sliderimage (5).jpeg",
		"/src/assets/images/sliderimage (6).jpeg",
		"/src/assets/images/sliderimage (7).jpeg",
		"/src/assets/images/sliderimage (8).jpeg",
	];
	return (
		<div className="py-2 flex items-center border-y justify-between w-full max-3xl:flex-col max-3xl:gap-2">
			<p className="capitalize font-custom1 text-base 3xl:w-1/12">
				featured companies
			</p>
			<div className="w-px h-12 bg-slate-300 max-3xl:hidden"></div>
			<CustomArrows imgsource={imgsource} />
		</div>
	);
}

export default Companies;
