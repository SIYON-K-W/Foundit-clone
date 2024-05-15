import React from "react";
import Searchpart from "../../general/parts of search/Searchpart";
import Categorypart from "../../general/parts of search/Categorypart";
import Searchbutton from "../../general/parts of search/Searchbutton";
import { IoMdClose } from "react-icons/io";
function Allbox({ settheitem }) {
	return (
		<div className="h-screen w-full absolute bg-white">
			<div className="wrapper h-full">
				<div className="py-5 flex flex-col h-full">
					<div className="mb-auto flex items-center justify-between">
						<p className="capitalize text-xl">search jobs</p>
						<IoMdClose
							className="text-2xl"
							onClick={settheitem.removehandleit}
						/>
					</div>
					<div className="flex flex-col items-center gap-9">
						<div className="w-full h-11 bg-white rounded-md pl-4 pr-2 py-2 border">
							<Searchpart placeholding={"search for jobs"} />
						</div>
						<div className="w-full h-11 bg-white rounded-md pr-2 py-2 border">
							<Categorypart />
						</div>
					</div>
					<Searchbutton
						clas={"py-3 rounded-md mt-auto"}
						ele={"search"}
					/>
				</div>
			</div>
		</div>
	);
}

export default Allbox;
