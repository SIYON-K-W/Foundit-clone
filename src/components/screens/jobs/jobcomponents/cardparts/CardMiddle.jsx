import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GrUserExpert } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";

function CardMiddle({ time, locaton, experience, skills }) {
	return (
		<ul className="flex flex-col gap-2 px-5">
			<li className="flex items-center gap-2 capitalize font-custom1 text-xs text-slate-600">
				<BsPersonWorkspace />
				<p>{time}</p>
			</li>
			<li className="flex items-center gap-2 capitalize font-custom1 text-xs text-slate-600">
				<CiLocationOn />
				<p>{locaton}</p>
			</li>
			<li className="flex items-center gap-2 capitalize font-custom1 text-xs text-slate-600">
				<GrUserExpert />
				<p>{experience}</p>
			</li>
			<li className="flex items-center gap-2 capitalize font-custom1 text-xs text-slate-600 flex-wrap">
				<GiSkills />
				{skills.map((element) => (
					<p className="bg-[#f4f4f5] py-1 px-2 rounded-full">
						{element}
					</p>
				))}
			</li>
		</ul>
	);
}

export default CardMiddle;
