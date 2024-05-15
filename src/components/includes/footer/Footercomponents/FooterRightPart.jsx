import React from "react";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function FooterRightPart() {
	const countrydata = [
		"india",
		"united states",
		"hongkong",
		"china",
		"singapore",
		"thailand",
	];
	return (
		<div className="3xl:w-7/12 pr-4 md:w-full 3xl:pl-4">
			<ul>
				<li className="text-white capitalize flex items-center gap-3 pb-4  border-b border-slate-600  text-base font-custom1">
					<span>selected country</span>
					<select
						className="outline-none border rounded-md w-32 h-8 capitalize p-1 text-base"
						style={{ background: "rgb(29 25 52)" }}>
						{countrydata.map((Element) => (
							<option value={Element}>{Element}</option>
						))}
					</select>
				</li>
				<li className="text-white capitalize flex items-center gap-3 py-4  border-b border-slate-600  text-base font-custom1">
					<FiPhone className="text-xl" />
					<div className="flex items-center gap-3 max-lg:flex-col max-lg:items-start">
						<Link
							className="hover:underline decoration-1"
							to={"tel:+91-40-66116611"}>
							toll no : +91-40-66116611
						</Link>

						<span className="max-lg:hidden">&#124;</span>
						<Link
							className="hover:underline decoration-1"
							to={"tel:1-800-4196666"}>
							toll no : 1-800-4196666
						</Link>
					</div>
				</li>

				<li className="text-white capitalize flex items-center gap-3 py-4  border-b border-slate-600  text-base font-custom1">
					<MdOutlineMail className="text-xl" />
					<Link
						className="hover:underline decoration-1"
						to={"mailto:info@foundit.in"}>
						info@foundit.in
					</Link>
				</li>
				<li className="text-white capitalize flex items-center gap-2 py-4  border-b border-slate-600  text-base font-custom1">
					<MdOutlineFileDownload className="text-2xl" />
					<div className="flex items-center gap-2 max-md:flex-col max-md:items-start">
						<p>download the app</p>
						<div className="flex items-center gap-2">
							<div>
								<Link
									className="hover:underline decoration-1"
									to={"/"}>
									<img
										src="/src/assets/images/appstore.svg"
										alt=""
									/>
								</Link>
							</div>
							<div>
								<Link
									className="hover:underline decoration-1"
									to={"/"}>
									<img
										src="/src/assets/images/playstore.svg"
										alt=""
									/>
								</Link>
							</div>
						</div>
					</div>
				</li>
				<li className="text-white capitalize flex items-center gap-3 py-4  border-b border-slate-600  text-base font-custom1 max-md:flex-col max-md:items-start">
					<p>stay connected</p>
					<div className="flex items-center gap-3">
						<Link>
							<MdFacebook className="text-xl" />
						</Link>
						<Link>
							<FaTwitterSquare className="text-xl" />
						</Link>
						<Link>
							<FaLinkedin className="text-xl" />
						</Link>
						<Link>
							<FaInstagram className="text-xl" />
						</Link>
						<Link>
							<FaYoutube className="text-xl" />
						</Link>
					</div>
				</li>
				<li className="text-white capitalize flex flex-wrap items-center gap-3 py-4 text-base font-custom1">
					&#124;
					<Link className="hover:underline decoration-1">
						Security & Fraud
					</Link>
					&#124;
					<Link className="hover:underline decoration-1">
						Privacy Policy
					</Link>
					&#124;
					<Link className="hover:underline decoration-1">
						Terms of Use
					</Link>
					&#124;
					<Link className="hover:underline decoration-1">
						Beware of Fraudsters
					</Link>
					&#124;
					<Link className="hover:underline decoration-1">
						Be Safe
					</Link>
					&#124;
					<Link className="hover:underline decoration-1">
						Complaints
					</Link>
					&#124;
				</li>
				<li className="text-white flex flex-wrap items-center gap-3 pb-4 text-base font-custom1">
					<p>&#169; 2024 foundit &#124; All rights Reserved</p>
				</li>
			</ul>
		</div>
	);
}

export default FooterRightPart;
