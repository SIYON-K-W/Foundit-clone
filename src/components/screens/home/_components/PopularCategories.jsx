import React from "react";
import { BsBank } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { IoBag } from "react-icons/io5";
import { SlCalculator } from "react-icons/sl";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiComputerLine } from "react-icons/ri";
import { useSearch } from "../../../context/SearchContext";
function PopularCategories() {
	const { searchjob, setSearchJob, type, setType } = useSearch();
	const data1 = [
		{
			icon: <BsBank className="text-lg text-orange-900" />,
			P: "banking",
		},
		{
			icon: <GoHome className="text-lg text-orange-900" />,
			P: "work from home",
		},
		{
			icon: <GoPeople className="text-lg text-orange-900" />,
			P: "HR",
		},
		{
			icon: <IoBag className="text-lg text-orange-900" />,
			P: "sales",
		},
		{
			icon: <SlCalculator className="text-lg text-orange-900" />,
			P: "accounting",
		},
		{
			icon: (
				<RiCustomerService2Line className="text-lg text-orange-900" />
			),
			P: "customer support",
		},
	];
	const data2 = [
		{
			icon: <RiComputerLine className="text-lg text-orange-900" />,
			P: "IT",
		},
		{
			icon: <BsBank className="text-lg text-orange-900" />,
			P: "banking",
		},
		{
			icon: <GoHome className="text-lg text-orange-900" />,
			P: "work from home",
		},
		{
			icon: <GoPeople className="text-lg text-orange-900" />,
			P: "HR",
		},
		{
			icon: <IoBag className="text-lg text-orange-900" />,
			P: "sales",
		},
		{
			icon: <SlCalculator className="text-lg text-orange-900" />,
			P: "accounting",
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
							to={`/category/${Element.P}`}
							onClick={setType("category")}
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
							to={`/category/${Element.P}`}
							style={{ width: "15.5%" }}
							onClick={setType("category")}>
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
