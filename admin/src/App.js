import {NavBar, SideBar} from "./components";
import "./App.css";
import {Home} from "./pages";

const App = () => {
	return (
		<>
			<NavBar/>
			<div className={"container"}>
				<SideBar/>
				<Home/>
			</div>
		</>
	);
};

export default App;