import React from "react";
import item from "../../../helpers/data.json";
import CardTop from "./cardparts/CardTop";
import CardMiddle from "./cardparts/CardMiddle";
import CardBottom from "./cardparts/CardBottom";
function Card() {
	return (
		<div className="w-2/5 flex flex-col gap-5">
			{item.map((Element) => (
				<div className="py-5 flex flex-col border rounded-2xl shadow-md gap-4 border-[#6e00be]">
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
