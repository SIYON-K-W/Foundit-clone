import React from "react";
import { CiBookmark } from "react-icons/ci";

function CardTop({ imgsource, job, company }) {
	return (
		<div className="flex justify-between px-5 relative">
			<div className="flex items-center gap-3">
				{imgsource ? (
					<div className="w-12 h-12 flex items-center bg-white border">
						<h3>
							<img
								src={imgsource}
								alt="company logo"
								className="w-full"
							/>
						</h3>
					</div>
				) : (
					""
				)}
				<div className="w-[83%]">
					<h5 className="capitalize">{job}</h5>
					<p className="capitalize font-custom1 text-sm text-slate-600">
						{company}
					</p>
				</div>
			</div>
			<div>
				<CiBookmark className="text-black" />
			</div>
			<div className="absolute top-0 -right-3 h-full hidden items-center activecard">
				<div className="traingle"></div>
			</div>
		</div>
	);
}

export default CardTop;
