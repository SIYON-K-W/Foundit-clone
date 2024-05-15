import React from "react";

function Searchbutton({ clas, ele }) {
	return (
		<button
			type="submit"
			className={`bg-purple-700 ${clas} capitalize text-white text-base`}>
			{ele}
		</button>
	);
}

export default Searchbutton;
