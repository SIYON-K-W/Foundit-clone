import React, { createContext, useEffect, useState } from "react";
import SecondNavbar from "../../includes/navbar/SecondNavbar";
import Card from "./jobcomponents/Card";
import MainFooter from "../../includes/footer/MainFooter";
import JobDescription from "./jobcomponents/JobDescription";
import Bottomenu from "../home/_components/Bottomenu";
import JobNavbarpart from "./jobcomponents/JobNavbarpart";
import { useParams } from "react-router-dom";

function Job() {
	const [id, setID] = useState();
	return (
		<>
			<Bottomenu />
			<SecondNavbar />
			<div className="py-32">
				<div className="wrapper">
					<div className="flex h-screen overflow-y-scroll no-scrollbar justify-between">
						<Card setID={setID} />
						<div className="max-3xl:hidden 3xl:w-[56.5%] sticky top-0">
							<JobDescription id={id} />
						</div>
					</div>
				</div>
			</div>
			<MainFooter />
		</>
	);
}

export default Job;
