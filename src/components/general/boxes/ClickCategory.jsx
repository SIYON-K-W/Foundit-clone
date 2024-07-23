import React, { useRef, useEffect } from "react";
import { useSearch } from "../../context/SearchContext";

function ClickCategory({ category, setCategory, cls, listcls, data }) {
	const cate = useRef();
	const { searchjob, type, setType } = useSearch();
	const handle = (name) => {
		setType("sort");
		setCategory(name);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!event.target.matches("#inputcategory")) {
				const show = document.getElementsByClassName(
					data ? "hello" : "turnit"
				)[0];
				if (show) {
					show.classList.add("hidden");
					document.getElementById(
						data ? "arrows" : "arrow"
					).style.transform = "rotate(0deg)";
				}
			}
		};

		window.addEventListener("click", handleClickOutside);

		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, [data]);

	const yearsOfExperience = [
		"fresher",
		"1 year",
		"2 years",
		"3 years",
		"4 years",
		"5 years",
		"6 years",
		"7 years",
		"8 years",
		"9 years",
		"10 years",
		"11 years",
		"12 years",
		"13 years",
		"14 years",
		"15 years",
		"16 years",
		"17 years",
		"18 years",
		"19 years",
		"20 years",
	];

	return (
		<ul
			className={`absolute bg-white border-2 py-2 w-full px-4 rounded-lg h-48 overflow-y-auto hidden ${cls} ${
				data ? "hello z-30" : "turnit z-[35]"
			}`}
			ref={cate}>
			{data
				? data.map((element, index) => (
						<li
							key={index}
							className={`whitespace-nowrap capitalize pl-4 rounded py-2 text-sm font-thin font-custom1 hover:text-purple-700 hover:bg-purple-100 block ${listcls} pl-20 cursor-pointer`}
							onClick={() => handle(element)}>
							{element}
						</li>
				  ))
				: yearsOfExperience.map((element, index) => (
						<li
							key={index}
							className="whitespace-nowrap capitalize pl-2.5 rounded pr-12 py-2 text-sm font-thin font-custom1 hover:text-purple-700 hover:bg-purple-100 block cursor-pointer"
							onClick={() => handle(element)}>
							{element}
						</li>
				  ))}
		</ul>
	);
}

export default ClickCategory;
