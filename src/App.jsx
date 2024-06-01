import "./App.css";
import "../src/assets/font/font.css";
import AppRoute from "./components/routing/AppRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logincontext from "./components/context/Logincontext";
import Searching from "./components/context/SearchContext";
import { createContext, useState } from "react";
export const IDcontext = createContext();
function App() {
	const [id, setID] = useState();
	return (
		<IDcontext.Provider value={{ id, setID }}>
			<Searching>
				<Logincontext>
					<AppRoute />
				</Logincontext>
			</Searching>
		</IDcontext.Provider>
	);
}

export default App;
