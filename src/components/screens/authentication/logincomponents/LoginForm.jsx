import axios from "axios";
import React, { useState } from "react";
import { useLog } from "../../../context/Logincontext";
import { Logedata } from "../../../helpers/AxiosUrl";
import { useLocation, useNavigate } from "react-router-dom";

function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailcorrect, setEmailCorrect] = useState(true);
	const [passcorrect, setPassCorrect] = useState(false);
	const [error, setError] = useState("");
	const { logined, HandleLogin } = useLog();
	const location = useLocation();
	const statepath = location.state;
	const navigate = useNavigate();
	const Tocheck = () => {
		const emailRegex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		setEmailCorrect(emailRegex.test(email));
	};
	const iscorrect = () => {
		if (!password) {
			setPassCorrect(true);
		} else {
			setPassCorrect(false);
		}
	};
	const Handlesubmit = (event) => {
		event.preventDefault();
		setError("");
		Tocheck();
		iscorrect();
		Logedata.post("token/", {
			username: email,
			password,
		})
			.then((response) => {
				const data = response.data;
				localStorage.setItem("userdata", JSON.stringify(data));
				HandleLogin({ type: "Login", payload: data });
				statepath ? navigate(statepath) : navigate("/");
			})
			.catch((error) => {
				console.log(error);
				if (error.response.status === 401) {
					setError(error.response.data.detail);
				}
			});
	};
	return (
		<div>
			<form className="flex gap-3 flex-col" onSubmit={Handlesubmit}>
				<label
					htmlFor="email"
					className="font-custom1 text-xs text-[#1d1934]">
					Email ID
				</label>
				<div className="flex gap-1 flex-col">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter Email ID"
						className="font-custom1 text-sm border p-3 rounded-lg outline-none"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						onBlur={() => Tocheck()}
					/>
					{!emailcorrect ? (
						<p className="text-xs font-custom1 text-red-600 capitalize">
							please enter valid email ID
						</p>
					) : (
						""
					)}
				</div>
				<label
					htmlFor="password"
					className="font-custom1 text-xs text-[#1d1934]">
					Password
				</label>
				<div className="flex gap-1 flex-col">
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						placeholder="Enter your Password"
						className="font-custom1 text-sm border p-3 rounded-lg outline-none"
						required
						onChange={(e) => setPassword(e.target.value)}
						onBlur={() => iscorrect()}
					/>
					{passcorrect ? (
						<p className="text-xs font-custom1 text-red-600 capitalize">
							please enter your password
						</p>
					) : (
						""
					)}
				</div>
				{error ? (
					<p className="text-xs font-custom1 text-red-600 capitalize">
						{error}
					</p>
				) : (
					""
				)}
				<button className="font-custom1 text-[#6e00be] text-right capitalize text-xs">
					forgot password?
				</button>
				<button
					type="submit"
					className="capitalize bg-[#6e00be] text-white rounded py-4 cursor-auto">
					login
				</button>
				<button className="font-custom1 text-[#6e00be] capitalize text-sm py-2">
					login via OTP
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
