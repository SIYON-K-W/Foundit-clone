import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useLog } from "../context/Logincontext";

function AuthRoute({ children }) {
	const { logined } = useLog();
	const location = useLocation();
	if (logined === null) {
		const path = location.pathname || {};
		return <Navigate to={"/auth/Login"} replace={false} state={path} />;
	}
	return children;
}

export default AuthRoute;
