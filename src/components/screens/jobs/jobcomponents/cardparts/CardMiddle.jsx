import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

function CardMiddle({ time, locaton, experience, skills, salary }) {
	return (
		<ul className="flex flex-col gap-2 px-5 items-start">
			<li className="flex items-center gap-2 capitalize font-custom1  text-slate-600">
				<BsPersonWorkspace className="text-sm" />
				<p className="text-xs">{time}</p>
			</li>
			<li className="flex items-center gap-2 capitalize font-custom1 text-slate-600">
				<MdOutlineLocationOn className="text-sm" />
				<p className="text-xs">{locaton}</p>
			</li>
			{salary ? (
				<li className="flex items-center gap-2 capitalize font-custom1 text-slate-600">
					<MdOutlineCurrencyRupee className="text-sm" />
					<p className="text-xs uppercase">{salary} inr</p>
				</li>
			) : (
				""
			)}
			<li className="flex items-center gap-2 capitalize font-custom1 text-slate-600">
				<MdOutlineCalendarMonth className="text-sm" />
				<p className="text-xs">{experience}</p>
			</li>
			<li className="flex items-center gap-2 w-full">
				<div>
					<GiSkills className="text-sm text-slate-600" />
				</div>
				<div className="overflow-scroll flex items-center gap-2 capitalize font-custom1 text-slate-600 no-scrollbar grow">
					{skills.map((element) => (
						<p className="bg-[#f4f4f5] py-1 px-2 rounded-full text-xs whitespace-nowrap">
							{element}
						</p>
					))}
				</div>
			</li>
		</ul>
	);
}

export default CardMiddle;
