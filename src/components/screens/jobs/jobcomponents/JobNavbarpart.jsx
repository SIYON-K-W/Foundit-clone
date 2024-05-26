import React, { useState } from "react";
import Searchpart from "../../../general/parts of search/Searchpart";
import ClickCategory from "../../../general/boxes/ClickCategory";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";

function JobNavbarpart({ cls, set }) {
	const [Jobselect, setJobSelect] = useState("Jobs");
	const Handlebox = () => {
		const show = document.getElementsByClassName("hello")[0];
		if (show) {
			show.classList.toggle("hidden");
		}
		if (show.className.includes("hidden")) {
			document.getElementById("arrows").style.transform = "rotate(0deg)";
		} else {
			document.getElementById("arrows").style.transform =
				"rotate(180deg)";
		}
	};
	const Jobsname = [
		"Software Engineer",
		"Data Scientist",
		"Project Manager",
		"Graphic Designer",
		"Marketing Specialist",
		"Human Resources Manager",
		"Sales Executive",
		"Financial Analyst",
		"Customer Service Representative",
		"Content Writer",
		"Product Manager",
		"Web Developer",
		"Network Administrator",
		"UX/UI Designer",
		"Mechanical Engineer",
		"Civil Engineer",
		"Business Analyst",
		"Research Scientist",
		"Accountant",
		"Operations Manager",
		"Social Media Manager",
		"IT Support Specialist",
		"Quality Assurance Tester",
		"Database Administrator",
		"Medical Laboratory Technician",
	];
	return (
		<div className={cls}>
			<div className="wrapper">
				<div className="flex items-center justify-evenly max-2xl:flex-col max-2xl:gap-2">
					<div
						className="w-[45%] max-2xl:w-full h-9 bg-white rounded-full pl-4 pr-2 py-2 border max-sm:pl-2 3xl:hidden"
						onClick={() => set(true)}>
						<Searchpart
							placeholding={"over 5,00,000+ jobs to explore"}
							read={true}
							clas={"max-sm:gap-2"}
						/>
					</div>
					<div
						className={`flex items-center justify-between h-full relative px-3 border rounded-full py-1 3xl:w-full max-3xl:w-[45%] max-2xl:w-full`}>
						<MdOutlineCategory className="text-xl text-[#a59d9d]" />
						<input
							type="text"
							placeholder="experience"
							value={Jobselect}
							id="inputcategory"
							className="outline-none font-custom1 grow text-center"
							onClick={Handlebox}
							readOnly
						/>
						<IoIosArrowDown
							id="arrows"
							className="transition-transform text-xl text-[#a59d9d]"
						/>
						<ClickCategory
							category={Jobselect}
							setCategory={setJobSelect}
							cls={"top-10 left-0"}
							listcls={"text-center"}
							data={Jobsname}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default JobNavbarpart;
