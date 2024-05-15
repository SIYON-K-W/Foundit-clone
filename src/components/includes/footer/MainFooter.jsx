import React from "react";
import FooterLeftPart from "./Footercomponents/FooterLeftPart";
import FooterRightPart from "./Footercomponents/FooterRightPart";

function MainFooter() {
	return (
		<footer
			className="py-5 max-3xl:pb-20"
			style={{ background: "rgb(29 25 52)" }}>
			<div className="wrapper">
				<div className="flex max-3xl:flex-col">
					<FooterLeftPart />
					<FooterRightPart />
				</div>
			</div>
		</footer>
	);
}

export default MainFooter;
