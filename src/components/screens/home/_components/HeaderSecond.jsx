import React from "react";
import Maindata from "../../../general/navbar/Maindata";
import Searchpart from "../../../general/parts of search/Searchpart";
import Allbox from "../../../includes/navbar/Allbox";

function HeaderSecond({ isfixed, item, settheitem }) {
	return (
		<div className="fixed w-full shadow-xl z-50 4xl:hidden">
			{isfixed && !item ? (
				<div className="py-3 bg-white animate-opa">
					<div className="wrapper">
						<div
							className="w-full h-11 bg-white rounded-full pl-4 pr-2 py-2 border shadow-lg max-sm:pl-2"
							onClick={settheitem.handleit}>
							<Searchpart
								placeholding={"over 5,00,000+ jobs to explore"}
								read={true}
								clas={"max-sm:gap-2"}
							/>
						</div>
					</div>
				</div>
			) : (
				""
			)}
			<div className="relative w-full">
				{item && <Allbox settheitem={settheitem} />}
			</div>
		</div>
	);
}

export default HeaderSecond;
