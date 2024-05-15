import React from "react";
import Search from "../../../general/boxes/Search";
import Searchpart from "../../../general/parts of search/Searchpart";

function SearchCategory({ setitem }) {
	return (
		<div className="h-56  spot max-4xl:h-36">
			<div className="wrapper h-full">
				<div className="flex justify-start items-center gap-5 h-full px-5 pt-3 max-4xl:hidden">
					<p className="text-white text-2xl w-fit">
						Over 5,00,000&#43; <br /> jobs to explore
					</p>
					<Search />
				</div>
				<div className="4xl:hidden h-full flex items-center justify-center">
					<div
						className="w-full h-11 bg-white rounded-full pl-4 pr-2 py-2 max-sm:pl-2"
						onClick={() => {
							setitem(true);
						}}>
						<Searchpart
							placeholding={"over 5,00,000+ jobs to explore"}
							read={true}
							clas={"max-sm:gap-2"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchCategory;
