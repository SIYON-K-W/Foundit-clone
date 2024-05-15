import React from "react";

function LoginLeft() {
	return (
		<div className="w-3/5 flex justify-center max-3xl:hidden">
			<div className="w-1/2 flex items-center gap-2 flex-col">
				<div className="w-full">
					<img
						src="/src/assets/images/login-illustration.png"
						alt="login-illustration"
						className="w-full"
					/>
				</div>
				<p className="font-custom1 text-sm text-[#777585] text-center leading-6">
					Create your profile now and be visible to the top recruiters
					in the world
				</p>
			</div>
		</div>
	);
}

export default LoginLeft;
