import React, { useContext, useEffect, useState } from "react";
import item from "../../../helpers/data.json";
import CardTop from "./cardparts/CardTop";
import CardMiddle from "./cardparts/CardMiddle";
import CardBottom from "./cardparts/CardBottom";
import data from "../../../helpers/data.json";
import { JobselectContext } from "../Job";
import { useParams } from "react-router-dom";
function Card({ setID, searchingitem }) {
	const [item, setItem] = useState([]);
	const { Jobselect, setJobSelect } = useContext(JobselectContext);
	const { cate } = useParams();
	useEffect(() => {
		if (Jobselect != "Jobs") {
			if (Jobselect) {
				const items = data.filter(
					(element) =>
						element.job.toLowerCase().replace(/\s/g, "") ===
						Jobselect.toLowerCase().replace(/\s/g, "")
				);
				setItem(items);
			} else {
				setItem(data);
			}
		}
	}, [Jobselect]);
	useEffect(() => {
		if (searchingitem) {
			const items = data.filter((element) =>
				element.job
					.toLowerCase()
					.replace(/\s/g, "")
					.includes(searchingitem.toLowerCase().replace(/\s/g, ""))
			);
			setItem(items);
			// setJobSelect("Jobs");
		} else {
			setItem(data);
		}
	}, [searchingitem]);

	useEffect(() => {
		if (cate) {
			const filteredItems = data.filter(
				(element) =>
					element.category.toLowerCase().replace(/\s/g, "") ===
					cate.toLowerCase().replace(/\s/g, "")
			);
			setItem(filteredItems);
		} else {
			setItem([]);
		}
	}, [cate]);
	useEffect(() => {
		console.log(searchingitem, Jobselect, cate);
		if (searchingitem === null && Jobselect === null && cate === null) {
			setItem(data);
		}
	}, [searchingitem, Jobselect, cate]);

	const handle = (id, index) => {
		const cards = document.getElementsByClassName("card");
		const Activecard = document.getElementsByClassName("activecard");

		const Activecardarray = [...Activecard];
		const Cardarray = [...cards];

		Activecardarray.map((Element) => Element.classList.add("hidden"));
		Activecardarray.map((Element, i) => {
			if (index === i) {
				Element.classList.remove("hidden");
				Cardarray[i].classList.add("border-[#6e00be]");
				Cardarray[i].classList.add("bg-[#FCFAFE]");
			} else {
				Element.classList.add("hidden");
				Cardarray[i].classList.remove("border-[#6e00be]");
				Cardarray[i].classList.remove("bg-[#FCFAFE]");
			}
		});
		setID(id);
	};
	return (
		<div className="w-[42.2%] flex flex-col gap-5">
			{item.map((Element, index) => (
				<div
					className="py-5 flex flex-col border rounded-2xl shadow-md gap-[10px] card cursor-pointer"
					onClick={() => handle(Element.id, index)}>
					<CardTop
						imgsource={Element.imgsource}
						job={Element.job}
						company={Element.company}
					/>
					<hr className="border-t border-slate-100" />
					<CardMiddle
						time={Element.time}
						locaton={Element.locaton}
						experience={Element.experience}
						skills={Element.skills}
						salary={Element.salary}
					/>
					<hr className="border-t border-slate-100" />
					<CardBottom
						posted={Element.aboutpost}
						somepriority={Element.somepriority}
					/>
				</div>
			))}
		</div>
	);
}

export default Card;
