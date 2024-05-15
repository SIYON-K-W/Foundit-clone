import React from "react";

function Maindata({ children, clas }) {
	return (
		<header className={`py-3 w-full ${clas} z-50`}>
			<div className="wrapper">{children}</div>
		</header>
	);
}

export default Maindata;
