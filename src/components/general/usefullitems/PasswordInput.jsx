import React, { useState } from "react";

function PasswordInput({ action }) {
	const [showpassword, setShowPassword] = useState(false);
	const togglebar = () => {
		setShowPassword((prev) => !prev);
	};
	return (
		<div className="flex gap-1 flex-col">
			<div className="relative">
				<input
					type={showpassword ? "text" : "password"}
					name="password"
					id="password"
					value={action.password}
					placeholder="Enter your Password"
					className="font-custom1 text-sm border p-3 rounded-lg outline-none w-full"
					required
					onChange={(e) => action.setPassword(e.target.value)}
					onBlur={() => action.iscorrect()}
				/>
				<div
					className="absolute w-5 h-4 right-[3.5%] top-[34%] cursor-pointer"
					onClick={togglebar}>
					{showpassword ? (
						<div className="relative w-full h-full">
							<div className="absolute w-full h-px just"></div>
						</div>
					) : (
						""
					)}
				</div>
			</div>
			{action.passcorrect ? (
				<p className="text-xs font-custom1 text-red-600 capitalize">
					please enter your password
				</p>
			) : (
				""
			)}
		</div>
	);
}
export default PasswordInput;
