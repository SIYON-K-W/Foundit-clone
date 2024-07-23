import React from "react";
import { MdOutlineMail, MdFacebook } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import {
	FaTwitterSquare,
	FaLinkedin,
	FaInstagram,
	FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function LoginFooter() {
	const countrydata = [
		"india",
		"united states",
		"hongkong",
		"china",
		"singapore",
		"thailand",
	];
	return (
		<div className="wrapper max-3xl:hidden">
			<ul className="flex items-center justify-between">
				<li>
					<select className="rounded-none bg-white border font-custom1 capitalize text-sm text-[#3c3c3c] outline-none w-[170px] h-9 pl-2">
						{countrydata.map((Element) => (
							<option value={Element}>{Element}</option>
						))}
					</select>
				</li>
				<li className="flex items-center gap-2">
					<FiPhone className="text-2xl text-[#3c3c3c]" />
					<div className="flex gap-2 flex-col items-start">
						<Link
							className="hover:underline decoration-1 decoration-purple-700 font-custom1 text-sm text-[#3c3c3c] capitalize"
							to={"tel:+91-40-66116611"}>
							toll no : +91-40-66116611
						</Link>
						<Link
							className="hover:underline decoration-1 decoration-purple-700 font-custom1 text-sm text-[#3c3c3c] capitalize"
							to={"tel:1-800-4196666"}>
							toll no : 1-800-4196666
						</Link>
					</div>
				</li>
				<li className="flex items-center gap-2">
					<MdOutlineMail className="text-2xl text-[#3c3c3c]" />
					<Link
						className="hover:underline decoration-1 underline-offset-2 decoration-purple-700 text-sm text-[#3c3c3c] font-custom1"
						to={"mailto:info@foundit.in"}>
						info@foundit.in
					</Link>
				</li>
				<li className="flex items-center gap-3">
					<Link
						target="blank"
						to={"https://www.facebook.com/founditIN/"}>
						<MdFacebook className="text-3xl text-[#3c3c3c]" />
					</Link>
					<Link
						target="blank"
						to={"https://twitter.com/foundit_India"}>
						<FaTwitterSquare className="text-3xl text-[#3c3c3c]" />
					</Link>
					<Link
						target="blank"
						to={"https://www.linkedin.com/company/foundit-jobs/"}>
						<FaLinkedin className="text-3xl text-[#3c3c3c]" />
					</Link>
					<Link
						target="blank"
						to={"https://www.instagram.com/foundit_india/"}>
						<FaInstagram className="text-3xl text-[#3c3c3c]" />
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default LoginFooter;
