import React, { useRef } from "react";

function ClickCategory({ category, setCategory, cls }) {
	const cate = useRef();

	const handle = (name) => {
		setCategory(name);
	};
	window.onclick = function (event) {
		const show = document.getElementsByClassName("turnit")[0];
		if (!event.target.matches("#inputcategory")) {
			show.classList.add("hidden");
			document.getElementById("arrow").style.transform = "rotate(0deg)";
		}
	};
	return (
		<ul
			className={`absolute bg-white z-30 border-2 py-2 w-full px-4 rounded-lg h-48 overflow-y-auto turnit hidden ${cls}`}
			ref={cate}>
			<li
				className="whitespace-nowrap capitalize pl-2.5 rounded pr-12 py-2 text-sm font-thin font-custom1 hover:text-purple-700 hover:bg-purple-100 block"
				onClick={() => handle("fresher")}>
				fresher
			</li>
			<li
				className="whitespace-nowrap capitalize pl-2.5 rounded pr-12 py-2 text-sm font-thin font-custom1 hover:text-purple-700 hover:bg-purple-100 block"
				onClick={() => handle("1 year")}>
				1 year
			</li>
			<li
				className="whitespace-nowrap capitalize pl-2.5 rounded pr-12 py-2 text-sm font-thin font-custom1 hover:text-purple-700 hover:bg-purple-100 block"
				onClick={() => handle("4 years")}>
				4 years
			</li>
			<li
				className="whitespace-nowrap capitalize pl-2.5 rounded pr-12 py-2 text-sm font-thin font-custom1 hover:text-purple-700 hover:bg-purple-100 block"
				onClick={() => handle("4 years")}>
				4 years
			</li>
			<li
				className="whitespace-nowrap capitalize pl-2.5 rounded pr-12 py-2 text-sm font-thin font-custom1 hover:text-purple-700 hover:bg-purple-100 block"
				onClick={() => handle("4 years")}>
				4 years
			</li>
			<li
				className="whitespace-nowrap capitalize pl-2.5 rounded pr-12 py-2 text-sm font-thin font-custom1 hover:text-purple-700 hover:bg-purple-100 block"
				onClick={() => handle("4 years")}>
				4 years
			</li>
		</ul>
	);
}
export default ClickCategory;
