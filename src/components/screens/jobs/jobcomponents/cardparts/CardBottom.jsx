import React from "react";
import { MdOutlineAccessTime } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { IoPaperPlaneOutline } from "react-icons/io5";

function CardBottom({ posted, somepriority }) {
	const geticon = (icon) => {
		switch (icon) {
			case "early applicant":
				return <CiTimer />;
			case "quick apply":
				return <IoPaperPlaneOutline />;
			default:
				break;
		}
	};
	return (
		<div className="flex items-center justify-between px-5">
			<p className="flex items-center gap-2 font-custom1 text-xs text-slate-600">
				<MdOutlineAccessTime />
				<span>{posted}</span>
			</p>
			{somepriority ? (
				<ul className="flex items-center gap-2 font-custom1 text-xs text-slate-600 capitalize">
					{somepriority.map((element) => (
						<li className="flex items-center gap-1 py-1 px-2 rounded-full text-[#2ba682] bg-[#F1FBF9]">
							{geticon(element)}
							<span>{element}</span>
						</li>
					))}
				</ul>
			) : (
				""
			)}
		</div>
	);
}

export default CardBottom;
