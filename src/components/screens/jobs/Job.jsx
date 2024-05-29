import React, { createContext, useState } from "react";
import SecondNavbar from "../../includes/navbar/SecondNavbar";
import Card from "./jobcomponents/Card";
import MainFooter from "../../includes/footer/MainFooter";
import JobDescription from "./jobcomponents/JobDescription";
import Bottomenu from "../home/_components/Bottomenu";
import JobNavbarpart from "./jobcomponents/JobNavbarpart";
import { useParams } from "react-router-dom";

export const JobselectContext = createContext();

function Job() {
	const [id, setID] = useState();
	const [Jobselect, setJobSelect] = useState();
	const { name } = useParams();

	return (
		<>
			<JobselectContext.Provider value={{ Jobselect, setJobSelect }}>
				<Bottomenu />
				<SecondNavbar />
				<div className="py-32">
					<div className="wrapper">
						<div className="flex h-screen overflow-y-scroll no-scrollbar justify-between">
							<Card setID={setID} searchingitem={name} />
							<div className="w-[56.5%] sticky top-0">
								<JobDescription id={id} />
							</div>
						</div>
					</div>
				</div>
				<MainFooter />
			</JobselectContext.Provider>
		</>
	);
}

export default Job;
