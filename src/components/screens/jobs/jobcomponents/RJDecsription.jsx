import React from "react";
import SecondNavbar from "../../../includes/navbar/SecondNavbar";
import Bottomenu from "../../home/_components/Bottomenu";
import MainFooter from "../../../includes/footer/MainFooter";
import JobDescription from "./JobDescription";
import Advertisement from "../../home/_components/Advertisement";

function RJDecsription() {
	return (
		<>
			<SecondNavbar />
			<Bottomenu />
			<div className="pt-36 max-2xl:pt-40 pb-10">
				<div className="wrapper">
					<div className="flex flex-col gap-10">
						<div className="h-screen">
							<JobDescription />
						</div>
						<Advertisement />
					</div>
				</div>
			</div>
			<MainFooter />
		</>
	);
}

export default RJDecsription;
