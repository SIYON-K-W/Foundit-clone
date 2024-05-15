import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import FooterHidden from "./FooterHidden";
import { Link } from "react-router-dom";

function FooterLeftPart() {
	const handle = (num) => {
		const hiddendata = [...document.getElementsByClassName("hiddendata")];
		const arrows = [...document.getElementsByClassName("arrows")];
		arrows.map((Element, index) => {
			if (Element.classList.contains("rotate-180") && index !== num) {
				Element.classList.remove("rotate-180");
			}
		});
		hiddendata.map((Element, index) => {
			if (!Element.classList.contains("hidden") && index !== num) {
				Element.classList.add("hidden");
			}
		});
		hiddendata[num].classList.toggle("hidden");
		arrows[num].classList.toggle("rotate-180");
	};
	const data = [
		{
			name: "non IT jobs",
			namedata: [
				"HR",
				"sales",
				"accounting",
				"call center",
				"eletrical engineering",
				"event mangement",
			],
		},
		{
			name: "IT jobs",
			namedata: [
				"software testing",
				"SQL",
				"oracle",
				"graphic design",
				"digital marketing",
			],
		},
		{
			name: "job categories",
			namedata: [
				"jobs by location",
				"jobs by skill",
				"jobs by title",
				"jobs by funtion",
				"jobs by industry",
				"jobs by education",
				"jobs by other",
			],
		},
		{
			name: "job seekers",
			namedata: [
				"job seekers login",
				"upload resume",
				"search tips",
				"free job alert",
				"find companies",
				"help",
			],
		},
		{
			name: "employers",
			namedata: [
				"employer login",
				"job posting",
				"access resume database",
				"join mRecruiters",
				"buy online",
			],
		},
		{
			name: "foundit",
			namedata: [
				"about us",
				"contact us",
				"send feedback",
				"html sitemap",
				"jobs app",
			],
		},
	];
	return (
		<div className="3xl:w-2/5 pr-4 md:w-full 3xl:border-r border-slate-600">
			<ul className="w-full">
				{data.map((Element, index) => (
					<li
						className="flex items-center justify-between w-full pt-4 cursor-pointer flex-wrap gap-3"
						onClick={() => handle(index)}>
						<span
							className={`${
								Element.name === "foundit" ? "" : "capitalize"
							} text-white text-base font-custom1`}>
							{Element.name}
						</span>
						<IoIosArrowDown className="text-white text-xl arrows transition-transform" />
						<hr className="w-full border-t border-slate-600"></hr>
						<FooterHidden namedata={Element.namedata} />
					</li>
				))}
				<li className="flex items-center justify-between w-full pt-4 cursor-pointer flex-wrap gap-3">
					<Link
						className={
							"captitalize text-white text-base font-custom1"
						}>
						career tips
					</Link>
					<hr className="w-full border-t border-slate-600"></hr>
				</li>
			</ul>
		</div>
	);
}

export default FooterLeftPart;
