import React from "react";
import item from "../../../helpers/data.json";
import CardTop from "./cardparts/CardTop";
import CardMiddle from "./cardparts/CardMiddle";
import CardBottom from "./cardparts/CardBottom";
function Card({ setID }) {
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
						posted={Element.posted}
						somepriority={Element.somepriority}
					/>
				</div>
			))}
		</div>
	);
}

export default Card;
