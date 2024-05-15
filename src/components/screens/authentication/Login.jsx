import React from "react";
import AuthenticateNavbar from "../../includes/navbar/AuthenticateNavbar";
import LoginLeft from "./logincomponents/LoginLeft";
import LoginRight from "./logincomponents/LoginRight";
import LoginFooter from "./logincomponents/LoginFooter";
import Bottomenu from "../home/_components/Bottomenu";
import { useLog } from "../../context/Logincontext";
function Login() {
	const { logined } = useLog();

	return (
		<>
			<Bottomenu />
			<AuthenticateNavbar />
			{logined ? (
				<div className="flex items-center justify-center h-screen">
					<p>logined</p>
				</div>
			) : (
				<div className="flex flex-col gap-6 pb-6">
					<div className="wrapper">
						<div className="flex justify-between items-center py-[52px] max-3xl:pb-16">
							<LoginLeft />
							<LoginRight />
						</div>
					</div>
					<hr className="bg-[#e2e2e2] max-3xl:hidden"></hr>
					<LoginFooter />
					<hr className="bg-[#e2e2e2] max-3xl:hidden"></hr>
					<div className="wrapper max-3xl:hidden">
						<p className="font-custom1 text-sm text-[#3c3c3c]">
							&#169; 2024 foundit &#124; All rights Reserved
						</p>
					</div>
				</div>
			)}
		</>
	);
}

export default Login;
