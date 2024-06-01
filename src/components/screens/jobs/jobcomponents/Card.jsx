import React, { useContext, useEffect, useMemo, useState } from "react";
import CardTop from "./cardparts/CardTop";
import CardMiddle from "./cardparts/CardMiddle";
import CardBottom from "./cardparts/CardBottom";
import { useNavigate, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { IDcontext } from "../../../../App";

function Card({ item }) {
	const [itemOffset, setItemOffset] = useState(0);
	const [currentItem, setCurrentItem] = useState([]);
	const [pageCount, setPageCount] = useState();
	const [windowwidth, setWindowWidth] = useState(window.innerWidth);
	const { setID } = useContext(IDcontext);
	const navigate = useNavigate();
	const itemsPerPage = 5;
	const handlethings = () => {
		setWindowWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", handlethings);
		return () => {
			window.removeEventListener("resize", handlethings);
		};
	}, []);
	console.log(windowwidth);

	useEffect(() => {
		try {
			if (windowwidth > 768) {
				handle(0);
			}
		} catch (error) {
			console.log(error);
		}
	}, [currentItem]);

	const handle = (index) => {
		const cards = document.getElementsByClassName("card");
		const Cardarray = [...cards];
		if (windowwidth > 768) {
			console.log(windowwidth);
			const Activecard = document.getElementsByClassName("activecard");
			const Activecardarray = [...Activecard];
			console.log(Cardarray[index].id);
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
			setID(parseInt(Cardarray[index].id));
		} else {
			setID(parseInt(Cardarray[index].id));
			navigate("/Jobs/Jobdescripton");
		}
	};
	useMemo(() => {
		const endOffset = itemOffset + itemsPerPage;
		console.log(`Loading item from ${itemOffset} to ${endOffset}`);
		const currentItems = item.slice(itemOffset, endOffset);
		const pageCount = Math.ceil(item.length / itemsPerPage);
		setCurrentItem(currentItems);
		setPageCount(Math.ceil(pageCount));
	}, [itemOffset, itemsPerPage, item]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % item.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};

	return (
		<>
			<div className="max-3xl:w-full 3xl:w-[42.2%] flex flex-col gap-5">
				<div className="flex flex-col gap-5">
					<p className="capitalize font-custom1 text-[#a5a3ae] text-sm">
						showing {currentItem.length} results
					</p>
					{currentItem.map((Element, index) => (
						<div
							id={Element.id}
							key={Element.id}
							className="py-5 flex flex-col border rounded-2xl shadow-md gap-[10px] card cursor-pointer"
							onClick={() => handle(index)}>
							<CardTop
								imgsource={Element.imgsource}
								job={Element.job}
								company={Element.company}
							/>
							<hr className="border-t border-slate-100" />
							<CardMiddle
								time={Element.time}
								locaton={Element.location}
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
				<ReactPaginate
					breakLabel="..."
					nextLabel=">"
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					previousLabel="<"
					renderOnZeroPageCount={null}
					containerClassName="paginationcontain"
					pageClassName="pages"
					pageLinkClassName="pagelink"
				/>
			</div>
		</>
	);
}

export default Card;
