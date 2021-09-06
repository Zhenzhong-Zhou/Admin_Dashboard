import {NavBar, SideBar} from "./components";
import "./App.css";

const App = () => {
	return (
		<>
			<NavBar/>
			<div className={"container"}>
				<SideBar/>
				<div className={"others"}>
					other pages
				</div>
			</div>
		</>
	);
};

export default App;