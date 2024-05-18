import React, { useState } from "react";
import ClickCategory from "../boxes/ClickCategory";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";

function Categorypart() {
	const [category, setCategory] = useState("");
	const Handlebox = () => {
		const show = document.getElementsByClassName("turnit")[0];
		if (show) {
			show.classList.toggle("hidden");
		}
		if (show.className.includes("hidden")) {
			document.getElementById("arrow").style.transform = "rotate(0deg)";
		} else {
			document.getElementById("arrow").style.transform = "rotate(180deg)";
		}
	};
	return (
		<div className="flex items-center gap-3 h-full relative">
			<MdOutlineCategory className="text-xl text-[#a59d9d]" />
			<input
				type="text"
				placeholder="experience"
				value={category}
				id="inputcategory"
				className="w-[70%] h-full border-none outline-none capitalize text-base font-custom1"
				onClick={Handlebox}
				readOnly
			/>
			<IoIosArrowDown
				id="arrow"
				className="transition-transform text-xl text-[#a59d9d]"
			/>
			<ClickCategory category={category} setCategory={setCategory} />
		</div>
	);
}

export default Categorypart;
