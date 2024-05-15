import React from "react";
import SecondNavbar from "../../includes/navbar/SecondNavbar";
import Card from "./jobcomponents/Card";
import MainFooter from "../../includes/footer/MainFooter";

function Job() {
	return (
		<>
			<SecondNavbar />
			<div>
				<div className="wrapper">
					<div className="flex h-screen overflow-y-auto no-scrollbar">
						<Card />
						<div className="w-3/6"></div>
					</div>
				</div>
			</div>
			<MainFooter />
		</>
	);
}

export default Job;
