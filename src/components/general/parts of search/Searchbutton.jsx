import React from "react";

function Searchbutton({ clas, ele }) {
	return (
		<button
			type="submit"
			className={`${clas} capitalize text-white text-sm`}>
			{ele}
		</button>
	);
}

export default Searchbutton;
