import React, { useState } from "react";
import { NavLink, json } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { BsNut } from "react-icons/bs";

function Bottomenu() {
	const data = [
		{
			icon: <MdHomeFilled className="text-xl max-xl:text-lg" />,
			P: "home",
			to: "/",
		},
		{
			icon: <IoBag className="text-xl max-xl:text-lg" />,
			P: "jobs",
			to: "/Jobs",
		},
		{
			icon: <GrServices className="text-xl max-xl:text-lg" />,
			P: "services",
			to: "/djnhsjan",
		},
		{
			icon: <BsNut className="text-xl max-xl:text-lg" />,
			P: "account",
			to: "/auth/Login",
		},
	];
	return (
		<div className="fixed bottom-0 py-2 w-full bg-white z-40 border-t shadow-[0px_-2px_10px_1px_#00000026]  3xl:hidden">
			<div className="wrapper h-full">
				<ul className="flex items-center justify-between h-full">
					{data.map((Element) => (
						<li>
							<NavLink
								to={Element.to}
								className={`${(isActive) =>
									isActive
										? "active"
										: ""} flex items-center flex-col gap-1 text-slate-600`}>
								{Element.icon}
								<p className="capitalize text-xs max-xl:font-custom1">
									{Element.P}
								</p>
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Bottomenu;
