import React from "react";
import { GoRocket } from "react-icons/go";
import { Link } from "react-router-dom";
import { VscBook } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import Oneline from "../../../general/usefullitems/Oneline";

function OurResourse() {
	const log = [
		{
			icon: (
				<GoRocket className="text-5xl max-3xl:text-3xl text-orange-600 max-lg:text-5xl max-sm:text-4xl" />
			),
			H4: "boost",
			P: "build visbility for yourself",
			col: "text-orange-900",
			bg: "bg-orange-50",
			to: "/",
		},
		{
			icon: (
				<VscBook className="text-5xl max-lg:text-5xl max-sm:text-4xl max-3xl:text-3xl text-teal-600" />
			),
			H4: "prep",
			P: "up your interview success rate",
			col: "text-teal-900",
			bg: "bg-teal-50",
			to: "/",
		},
		,
		{
			icon: (
				<FaGraduationCap className="text-5xl max-lg:text-5xl max-sm:text-4xl max-3xl:text-3xl text-sky-600" />
			),
			H4: "learn",
			P: "upskill to get ahead",
			col: "text-sky-900",
			bg: "bg-sky-50",
			to: "/",
		},
		{
			icon: (
				<FaPeopleGroup className="text-5xl max-lg:text-5xl max-sm:text-4xl max-3xl:text-3xl text-fuchsia-600" />
			),
			H4: "network",
			P: "grow with peers & mentors",
			col: "text-fuchsia-900",
			bg: "bg-fuchsia-50",
			to: "/",
		},
	];
	return (
		<div className="flex flex-col gap-5">
			<Oneline />
			<div className="flex items-center justify-between max-3xl:flex-wrap max-3xl:gap-4 max-3xl:justify-center max-lg:flex-col">
				{log.map((Element) => (
					<div
						className={`flex items-center justify-center flex-col ${Element.bg} rounded-lg w-[24%] max-3xl:w-[47%] max-lg:w-[100%] max-2xl:py-4 max-sm:py-2`}>
						<Link className="w-full" to={Element.to}>
							<div className="flex items-center gap-2 flex-col p-4 max-3xl:flex-row-reverse justify-between">
								<div className="max-3xl:w-[50%] max-3xl:flex max-3xl:justify-center max-3xl:items-center max-lg:justify-end max-2xl:w-[auto]">
									{Element.icon}
								</div>
								<div className="flex flex-col items-center max-3xl:items-start max-3xl:w-[41%] max-2xl:w-[auto]">
									<h4
										className={`capitalize text-xl font-bold ${Element.col}  max-3xl:text-sm max-lg:text-xl max-sm:text-base`}>
										{Element.H4}
									</h4>
									<p className="capitalize font-custom1 text-xs whitespace-nowrap max-3xl:whitespace-normal">
										{Element.P}
									</p>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default OurResourse;
