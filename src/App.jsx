import "./App.css";
import "../src/assets/font/font.css";
import AppRoute from "./components/routing/AppRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logincontext from "./components/context/Logincontext";

function App() {
	return (
		<>
			<Logincontext>
				<AppRoute />
			</Logincontext>
		</>
	);
}

export default App;
