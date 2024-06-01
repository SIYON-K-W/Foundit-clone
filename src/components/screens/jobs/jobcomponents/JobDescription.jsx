import React, { useContext, useEffect, useRef, useState } from "react";
import data from "../../../helpers/data.json";
import { ImNewTab } from "react-icons/im";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { CiPaperplane } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IDcontext } from "../../../../App";
import { Navigate, useNavigate } from "react-router-dom";

function JobDescription() {
	const [Jobdata, setJObData] = useState([]);
	const { id } = useContext(IDcontext);
	const navigate = useNavigate();
	const handlescroll = () => {
		const scrollableDiv = document.getElementById("scrollableDiv");
		const description = document.getElementById("job description");
		const currentScrollPosition = scrollableDiv.scrollTop;
		const descriptionPosition = description.offsetTop - 140;
		const highname = document.getElementsByClassName("activeness");
		if (descriptionPosition <= currentScrollPosition) {
			highname[1].classList.add("activescroll");
			highname[0].classList.remove("activescroll");
		} else {
			highname[1].classList.remove("activescroll");
			highname[0].classList.add("activescroll");
		}
	};
	const handlescrollintoview = (ID) => {
		const scrollableDiv = document.getElementById("scrollableDiv");
		const item = document.getElementById(`${ID}`).offsetTop - 140;
		console.log(item);
		scrollableDiv.scrollTo({
			top: item,
			behavior: "smooth",
		});
	};
	useEffect(() => {
		console.log(id);
		try {
			if (id) {
				const filtereddata = data.filter(
					(element) => element.id === id
				);
				console.log(filtereddata);
				setJObData(filtereddata);
			} else {
				navigate("/Jobs");
			}
		} catch (error) {
			console.log(error);
		}
	}, [id]);
	const handle = (data) => {
		return data.map((element) => {
			switch (element.type) {
				case "bold":
					return element.data.map((element) => (
						<>
							{" "}
							{element === "br" ? (
								<br />
							) : (
								<>
									<b className="font-custom1 text-[#1d1934] text-sm">
										{element}
									</b>
									<br />
								</>
							)}
						</>
					));
				case "ul":
					return (
						<ul className="list-disc pl-5">
							{element.data.map((element) => (
								<li className="font-custom1 text-sm text-[#3b3b3b]">
									{element}
								</li>
							))}
						</ul>
					);
				case "ol":
					return (
						<ol className="list-decimal pl-5 flex flex-col items-start">
							{element.data.map((element) => (
								<li className="font-custom1 text-sm text-[#3b3b3b]">
									{element}
								</li>
							))}
						</ol>
					);
				case "p":
					return element.data.map((element) =>
						element === "br" ? (
							<br />
						) : (
							<p className="font-custom1 text-[#1d1934] text-sm">
								{element}
							</p>
						)
					);
				case "br":
					return (
						<>
							{Array.from(
								{ length: element.times },
								(_, index) => (
									<br key={index} />
								)
							)}
						</>
					);
				default:
					break;
			}
		});
	};
	return (
		<div className="h-full border-[#f4f4f5] border-2 bg-white rounded-2xl w-full py-4">
			<div className="flex gap-2 flex-col h-full">
				{Jobdata.length >= 1 ? (
					Jobdata.map((element, ind) => (
						<>
							<div
								className="flex justify-between px-4 max-2xl:flex-col max-2xl:gap-2"
								key={ind}>
								<div className="flex items-center gap-3 max-2xl:w-full">
									{element.imgsource ? (
										<div className="w-[50px] h-[50px] flex items-center bg-white border">
											<h3>
												<img
													src={element.imgsource}
													alt="company logo"
													className="w-full"
												/>
											</h3>
										</div>
									) : (
										""
									)}
									<div className="w-[83%]">
										<div className="flex items-center gap-1">
											<h5 className="capitalize">
												{element.job}
											</h5>
											<ImNewTab />
										</div>
										<p className="capitalize font-custom1 text-sm text-[#777585]">
											{element.company}
										</p>
									</div>
								</div>
								<button className="h-[34px] w-[200px] max-2xl:w-full flex items-center justify-center rounded-lg gap-1 text-white bg-[#6E00BE]">
									<IoPaperPlaneOutline />
									<span className="font-custom1 capitalize text-xs">
										quick apply
									</span>
								</button>
							</div>
							<hr />
							<div>
								<ul className="px-6 flex items-center gap-8">
									<li
										className="capitalize cursor-pointer py-[6px] decoration-2 hover:decoration-[#6e00be] decoration-[#fff] text-sm underline underline-offset-[18px] hover:text-[#6e00be] text-[#777585] font-custom1 hover:font-bold activescroll activeness"
										onClick={() => {
											handlescrollintoview("highlights");
										}}>
										highlights
									</li>
									<li
										className="capitalize cursor-pointer py-[6px] decoration-2 hover:decoration-[#6e00be] decoration-[#fff] text-sm underline underline-offset-[18px] hover:text-[#6e00be] text-[#777585] font-custom1 hover:font-bold activeness"
										onClick={() => {
											handlescrollintoview(
												"job description"
											);
										}}>
										job description
									</li>
								</ul>
							</div>
							<hr />
							<div
								className="overflow-y-scroll no-scrollbar grow flex flex-col gap-2 px-6"
								id="scrollableDiv"
								onScroll={handlescroll}>
								<div className="py-4" id="highlights">
									<ul className="border-[#d2d1d6] border max-md:px-4 max-md:py-4 rounded-t-lg px-7 py-5 flex flex-col items-start gap-2">
										<li className="flex items-center gap-2 capitalize font-custom1">
											<MdOutlineLocationOn className="text-base text-[#a5a3ae]" />
											<p className="text-xs">
												{element.locaton}
											</p>
										</li>
										<li className="flex items-center gap-2 max-md:flex-col max-md:items-baseline">
											<div className="flex items-center gap-2 capitalize font-custom1">
												<MdOutlineCalendarMonth className="text-sm text-[#a5a3ae]" />
												<p className="text-xs">
													{element.experience}
												</p>
											</div>
											{element.salary ? (
												<div className="flex items-center gap-2 capitalize font-custom1">
													<span className="text-xs text-slate-300 max-md:hidden">
														&#124;
													</span>
													<MdOutlineCurrencyRupee className="text-sm text-[#a5a3ae]" />
													<p className="text-xs uppercase">
														{element.salary} inr
													</p>
												</div>
											) : (
												""
											)}
										</li>
										<li className="flex items-center gap-4 max-md:flex-col max-md:gap-2 max-md:items-baseline">
											<div className="flex items-center gap-2 font-custom1 text-[#a5a3ae]">
												<MdOutlineAccessTime className="text-base" />
												<span className="text-xs">
													{
														element.aboutpost
															.postedate
													}
												</span>
											</div>
											<div className="flex items-center gap-2 font-custom1 text-[#a5a3ae]">
												<LuEye className="text-base" />
												<span className="text-xs">
													{element.aboutpost.seed}
												</span>
											</div>
											<div className="flex items-center gap-2 font-custom1 text-[#a5a3ae]">
												<CiPaperplane className="text-base" />
												<span className="capitalize text-xs">
													{element.aboutpost.applied}{" "}
													applied
												</span>
											</div>
										</li>
									</ul>
								</div>
								<div
									className="flex flex-col gap-4"
									id="job description">
									<h4 className="capitalize text-sm">
										job description
									</h4>
									<div>
										<div>
											{handle(element.jobDescription)}
										</div>
									</div>
								</div>
							</div>
						</>
					))
				) : (
					<div className="flex items-center justify-center h-screen">
						no description
					</div>
				)}
			</div>
		</div>
	);
}

export default JobDescription;
