import React from "react";

function TopL() {
	const loginmethods = [
		{
			imgsourse: "/src/assets/images/google-ico.svg",
			logineway: "google",
		},
		{
			imgsourse: "/src/assets/images/linkedin.svg",
			logineway: "linkedin",
		},
		{
			imgsourse: "/src/assets/images/facebook.svg",
			logineway: "facebook",
		},
	];
	return (
		<div className="flex flex-col gap-6">
			<h3 className="capitalize text-xl font-custom1">login</h3>
			<div className="flex justify-around items-center">
				{loginmethods.map((Element) => (
					<div className="flex items-center gap-1 cursor-pointer">
						<div className="xl:w-5 xl:h-5 max-xl:w-7 max-xl:h-7 max-md:w-6 max-md:h-6">
							<img
								src={Element.imgsourse}
								alt={Element.logineway}
								className="w-full h-full"
							/>
						</div>
						<span className="font-custom1 capitalize text-sm text-[#1d1934] max-xl:hidden">
							{Element.logineway}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default TopL;
