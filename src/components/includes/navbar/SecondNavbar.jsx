import React, { useState } from "react";
import NavbarLeftPart from "./NavbarLeftPart";
import NavbaRightPart from "./NavbaRightPart";
import List from "./List";
import Logo from "./Logo";
import Navform from "../../screens/jobs/jobcomponents/Navform";
import JobNavbarpart from "../../screens/jobs/jobcomponents/JobNavbarpart";
import Allbox from "./Allbox";

function SecondNavbar({ cstegory = false }) {
	const [show, setShow] = useState(false);
	const handleit = () => {
		document.querySelector("body").style.overflow = "hidden";
		setShow(true);
	};
	const removehandleit = () => {
		setShow(false);
		document.querySelector("body").style.overflow = "";
	};
	return (
		<>
			<div className="fixed bg-white border-b py-3 z-50 w-full max-2xl:py-2">
				<div className="relative w-full">
					{show && <Allbox settheitem={{ removehandleit }} />}
				</div>
				<div className="flex flex-col gap-3 max-2xl:gap-2">
					<div className="wrapper">
						<div className="flex items-center 3xl:gap-10 max-3xl:justify-between">
							<div className="flex gap-4 items-center">
								<Logo blue={true} />
								<List set={true} clas={"max-3xl:hidden"} />
							</div>
							<Navform />
							<NavbaRightPart regcol={"text-[#9a10bd]"} />
						</div>
					</div>
					<div className="w-full h-px bg-slate-100"></div>
					<JobNavbarpart
						cls={""}
						set={handleit}
						cstegory={cstegory}
					/>
				</div>
			</div>
		</>
	);
}

export default SecondNavbar;
