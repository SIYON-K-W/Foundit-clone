import React from "react";
import { Link } from "react-router-dom";
import TopL from "./TopL";
import LoginForm from "./LoginForm";

function LoginRight() {
	return (
		<div className="3xl:w-2/5 max-3xl:w-full">
			<div className="flex flex-col gap-11">
				<div className="flex flex-col gap-5">
					<h3 className="text-[#1d1934] text-sm text-end">
						New to foundit?
						<Link className="font-custom1 text-[#6e00be]">
							Register
						</Link>
					</h3>
					<div className="bg-[#f4f4f5] h-px"></div>
					<TopL />
					<div className="flex gap-3 items-center">
						<div className="bg-[#f4f4f5] h-px grow"></div>
						<p className="uppercase font-custom1 text-sm grow-0 text-[#777585]">
							or
						</p>
						<div className="bg-[#f4f4f5] h-px grow"></div>
					</div>
					<LoginForm />
				</div>
				<div className="bg-[#f4f4f5] py-5 flex flex-col justify-center gap-5 rounded-2xl items-center">
					<p className="font-custom1 text-[#444255] text-[13px] text-center">
						Your dream job is a click away! Get the app
						<br className="max-4xl:hidden" />
						on your mobile.
					</p>
					<div className="flex justify-between">
						<Link className="w-36 h-10">
							<img
								src="/src/assets/images/android-footer.svg"
								alt="playstore"
								className="w-full h-full"
							/>
						</Link>
						<Link className="w-36 h-10">
							<img
								src="/src/assets/images/appstore.svg"
								alt="appstore"
								className="w-full h-full"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginRight;
