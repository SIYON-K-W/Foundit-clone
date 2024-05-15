import React from "react";
import { BsBank } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { IoBag } from "react-icons/io5";
import { SlCalculator } from "react-icons/sl";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiComputerLine } from "react-icons/ri";
function PopularCategories() {
	const data1 = [
		{
			icon: <BsBank className="text-lg text-orange-900" />,
			P: "banking",
			to: "/",
		},
		{
			icon: <GoHome className="text-lg text-orange-900" />,
			P: "work from home",
			to: "/",
		},
		{
			icon: <GoPeople className="text-lg text-orange-900" />,
			P: "HR",
			to: "/",
		},
		{
			icon: <IoBag className="text-lg text-orange-900" />,
			P: "sales",
			to: "/",
		},
		{
			icon: <SlCalculator className="text-lg text-orange-900" />,
			P: "accounting",
			to: "/",
		},
		{
			icon: (
				<RiCustomerService2Line className="text-lg text-orange-900" />
			),
			P: "customer support",
			to: "/",
		},
	];
	const data2 = [
		{
			icon: <RiComputerLine className="text-lg text-orange-900" />,
			P: "IT",
			to: "/",
		},
		{
			icon: <BsBank className="text-lg text-orange-900" />,
			P: "banking",
			to: "/",
		},
		{
			icon: <GoHome className="text-lg text-orange-900" />,
			P: "work from home",
			to: "/",
		},
		{
			icon: <GoPeople className="text-lg text-orange-900" />,
			P: "HR",
			to: "/",
		},
		{
			icon: <IoBag className="text-lg text-orange-900" />,
			P: "sales",
			to: "/",
		},
		{
			icon: <SlCalculator className="text-lg text-orange-900" />,
			P: "accounting",
			to: "/",
		},
	];
	return (
		<div className="flex flex-col gap-5">
			<h4 className="text-base max-3xl:text-center">
				popular categories
			</h4>
			<div className="flex flex-col gap-4 overflow-x-scroll no-scrollbar">
				<div className="flex items-center gap-x-4">
					{data1.map((Element) => (
						<Link
							className="border rounded-md w-44 min-w-44"
							to={Element.to}
							style={{ width: "15.5%" }}>
							<ul className="flex items-center gap-2 p-1">
								<li className="p-3 rounded-md bg-orange-100">
									{Element.icon}
								</li>
								<li className="capitalize font-custom1 text-xs">
									{Element.P}
								</li>
							</ul>
						</Link>
					))}
				</div>
				<div className="flex items-center gap-x-4">
					{data2.map((Element) => (
						<Link
							className="border rounded-md w-44 min-w-44"
							to={Element.to}
							style={{ width: "15.5%" }}>
							<ul className="flex items-center gap-2 p-1">
								<li className="p-3 rounded-md bg-orange-100">
									{Element.icon}
								</li>
								<li className="capitalize font-custom1 text-xs">
									{Element.P}
								</li>
							</ul>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default PopularCategories;
