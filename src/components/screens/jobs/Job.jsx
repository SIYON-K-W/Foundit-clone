import React, { useState } from "react";
import SecondNavbar from "../../includes/navbar/SecondNavbar";
import Card from "./jobcomponents/Card";
import MainFooter from "../../includes/footer/MainFooter";
import JobDescription from "./jobcomponents/JobDescription";

function Job() {
	const [id, setID] = useState();
	return (
		<>
			<SecondNavbar />
			<div>
				<div className="wrapper">
					<div className="flex h-screen overflow-y-auto no-scrollbar">
						<Card setID={setID} />
						<div className="w-3/6">
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
