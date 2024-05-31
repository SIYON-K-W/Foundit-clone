import React from "react";
import SecondNavbar from "../../../includes/navbar/SecondNavbar";
import Bottomenu from "../../home/_components/Bottomenu";
import MainFooter from "../../../includes/footer/MainFooter";
import JobDescription from "./JobDescription";

function RJDecsription() {
	return (
		<>
			<SecondNavbar />
			<Bottomenu />
			<div className="h-screen flex justify-center items-center">
				<JobDescription />
			</div>
			<MainFooter />
		</>
	);
}

export default RJDecsription;
