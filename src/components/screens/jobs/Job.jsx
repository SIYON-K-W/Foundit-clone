import React, { createContext, useEffect, useState } from "react";
import SecondNavbar from "../../includes/navbar/SecondNavbar";
import Card from "./jobcomponents/Card";
import MainFooter from "../../includes/footer/MainFooter";
import JobDescription from "./jobcomponents/JobDescription";
import Bottomenu from "../home/_components/Bottomenu";
import JobNavbarpart from "./jobcomponents/JobNavbarpart";
import { useNavigate, useParams } from "react-router-dom";
import Advertisement from "../home/_components/Advertisement";
import { useSearch } from "../../context/SearchContext";
import data from "../../helpers/data.json";

function Job() {
	const [item, setItem] = useState([]);
	const { cate } = useParams();
	const { name } = useParams();
	const navigate = useNavigate();
	const { searchjob, type, Jobselect, setJobSelect, setSearchJob } =
		useSearch();
	useEffect(() => {
		let filteredItems = [];
		switch (type) {
			case "search":
				console.log("Filtering by name with type as search:", name);
				filteredItems = data.filter((element) =>
					element.job
						.toLowerCase()
						.replace(/\s/g, "")
						.includes(searchjob.toLowerCase().replace(/\s/g, ""))
				);
				setJobSelect("");
				setItem(filteredItems);
				break;
			case "sort":
				console.log("Filtering by Jobselect:", Jobselect);
				filteredItems = data.filter(
					(element) =>
						element.job.toLowerCase().replace(/\s/g, "") ===
						Jobselect.toLowerCase().replace(/\s/g, "")
				);
				setSearchJob("");
				setItem(filteredItems);
				navigate("/Jobs");
				break;
			case "category":
				console.log("Filtering by category:", cate);
				filteredItems = data.filter(
					(element) =>
						element.category.toLowerCase().replace(/\s/g, "") ===
						cate.toLowerCase().replace(/\s/g, "")
				);
				setItem(filteredItems);
				break;
			default:
				setItem(data);
				break;
		}
	}, [Jobselect, name, cate]);

	return (
		<>
			<Bottomenu />
			<SecondNavbar />
			<div className="pt-36 max-2xl:pt-40 pb-10">
				<div className="wrapper">
					<div className="flex flex-col gap-10">
						{item.length >= 1 ? (
							<>
								<div className="flex h-screen overflow-y-scroll no-scrollbar justify-between">
									<Card item={item} setItem={setItem} />
									<div className="max-3xl:hidden 3xl:w-[56.5%] sticky top-0">
										<JobDescription />
									</div>
								</div>
								<Advertisement />
							</>
						) : (
							<div className="h-screen flex items-center justify-center">
								<div className="flex flex-col gap-3">
									<div>
										<img
											src="/src/assets/images/Frame.svg"
											alt="nosearchresults"
										/>
									</div>
									<p>Sorry no result found</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			<MainFooter />
		</>
	);
}

export default Job;
