import React from "react";
import { Link } from "react-router-dom";

function Logo({ blue = false }) {
	return (
		<div className="w-28">
			<h1>
				<Link to={"/"}>
					{blue ? (
						<img
							src="/src/assets/images/headerLogo-primary (1).png"
							alt="logo"
						/>
					) : (
						<>
							<img
								src="/src/assets/images/headerLogo-primary (1).png"
								alt="logo"
								className="max-4xl:hidden"
							/>
							<img
								src="/src/assets/images/founditLogo-white.png"
								alt="logo"
								className="4xl:hidden"
							/>
						</>
					)}
				</Link>
			</h1>
		</div>
	);
}

export default Logo;
