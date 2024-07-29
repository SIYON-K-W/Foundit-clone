import React from "react";
import Logo from "./Logo";
import List from "./List";

function NavbarLeftPart() {
	return (
		<div className="flex gap-4 items-center">
			<Logo />
			<List set={false} clas={"max-3xl:hidden"} />
		</div>
	);
}

export default NavbarLeftPart;
