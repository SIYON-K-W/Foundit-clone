import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const LogedContext = createContext();

function Logincontext({ children }) {
	const [logined, setLogined] = useState(null);
	const HandleLogin = (action) => {
		switch (action.type) {
			case "Login":
				setLogined(action.payload);
				break;
			case "Logout":
				setLogined(null);
				localStorage.clear();
				break;
			default:
				break;
		}
	};
	useEffect(() => {
		setLogined(JSON.parse(localStorage.getItem("userdata")));
	}, []);
	return (
		<LogedContext.Provider value={{ logined, HandleLogin }}>
			{children}
		</LogedContext.Provider>
	);
}

export const useLog = () => {
	const data = useContext(LogedContext);
	return data;
};

export default Logincontext;
