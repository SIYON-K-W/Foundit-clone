import "./App.css";
import "../src/assets/font/font.css";
import AppRoute from "./components/routing/AppRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logincontext from "./components/context/Logincontext";
import Searching from "./components/context/SearchContext";

function App() {
	return (
		<>
			<Searching>
				<Logincontext>
					<AppRoute />
				</Logincontext>
			</Searching>
		</>
	);
}

export default App;
