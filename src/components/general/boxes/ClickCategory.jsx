import React, { useRef } from "react";

function ClickCategory({ category, setCategory }) {
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
			className="absolute bg-white z-50 border-2 py-3 px-4 rounded-lg w-full top-14 h-48 overflow-y-auto turnit hidden"
			ref={cate}>
			<li
				className="whitespace-nowrap capitalize pl-2.5 rounded pr-12 py-3 text-sm font-thin font-custom1 hover:text-purple-700 hover:bg-purple-100 block"
				onClick={() => handle("backend developer")}>
				backend developer
			</li>
			<li
				className="whitespace-nowrap capitalize pl-2.5 rounded pr-12 py-3 text-sm font-thin font-custom1 hover:text-purple-700 hover:bg-purple-100 block"
				onClick={() => handle("frontend developer")}>
				frontend developer
			</li>
		</ul>
	);
}
export default ClickCategory;
