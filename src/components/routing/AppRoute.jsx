import React from "react";
import Login from "../screens/authentication/Login";
import Home from "../screens/home/Home";
import { Routes, Route } from "react-router-dom";
import Job from "../screens/jobs/Job";
import Signup from "../screens/authentication/Signup";
import AuthRoute from "./AuthRoute";
import JobDescription from "../screens/jobs/jobcomponents/JobDescription";
import RJDecsription from "../screens/jobs/jobcomponents/RJDecsription";

function AppRoute() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth/Login" element={<Login />} />
				<Route path="/auth/Register" element={<Signup />} />
				{/* <Route
					path="/Jobs"
					element={<AuthRoute children={<Job />} />}
				/> */}
				<Route path="/Jobs" element={<Job />} />
				<Route path="/Jobdescripton" element={<RJDecsription />} />
				<Route path="/Jobs/search/:name" element={<Job />} />
				<Route path="/category/:cate" element={<Job />} />
			</Routes>
		</>
	);
}

export default AppRoute;
