import React, { useEffect, useState } from "react";
import data from "../../../helpers/data.json";
import { ImNewTab } from "react-icons/im";
import { IoPaperPlaneOutline } from "react-icons/io5";
function JobDescription({ id }) {
	const [Jobdata, setJObData] = useState([]);
	console.log(id);
	useEffect(() => {
		try {
			const filtereddata = data.filter((element) => element.id === id);
			setJObData(filtereddata);
		} catch (error) {
			console.log(error);
		}
	}, [id]);
	const handle = (data) => {
		console.log("mnjnjn");
		return data.map((element) => {
			switch (element.type) {
				case "bold":
					console.log(element.data);
					return element.data.map((element) => (
						<>
							<b>{element}</b>
							<br />
						</>
					));
				case "ul":
					return (
						<ul className="list-disc">
							{element.data.map((element) => (
								<li>{element}</li>
							))}
						</ul>
					);
				case "ol":
					return (
						<ol className="list-decimal">
							{element.data.map((element) => (
								<li>{element}</li>
							))}
						</ol>
					);
				case "p":
					return element.data.map((element) =>
						element === "br" ? <br /> : <p>{element}</p>
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
			<div className="flex gap-2 flex-col">
				{Jobdata.map((element) => (
					<>
						<div className="flex justify-between px-4">
							<div className="flex items-center gap-3">
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
								<div>
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
							<button className="h-[34px] w-[200px] flex items-center justify-center rounded-lg gap-1 text-white bg-[#6E00BE]">
								<IoPaperPlaneOutline />
								<span className="font-custom1 capitalize text-xs">
									quick apply
								</span>
							</button>
						</div>
						<hr />
						<div>
							<ul className="px-6 flex items-center gap-8">
								<li className="capitalize cursor-pointer py-[6px] decoration-2 hover:decoration-[#6e00be] decoration-[#fff] text-sm underline underline-offset-[18px] hover:text-[#6e00be] text-[#777585] font-custom1 hover:font-bold">
									highlights
								</li>
								<li className="capitalize cursor-pointer py-[6px] decoration-2 hover:decoration-[#6e00be] decoration-[#fff] text-sm underline underline-offset-[18px] hover:text-[#6e00be] text-[#777585] font-custom1 hover:font-bold">
									job description
								</li>
							</ul>
						</div>
						<hr />
						<div>
							<div className="border-[#d2d1d6] border"></div>
						</div>
						<div>
							{/* <p>{handle(element.jobDescription)}</p> */}
						</div>
					</>
				))}
			</div>
		</div>
	);
}

export default JobDescription;
