import {NavBar, SideBar} from "./components";

const App = () => {
	return (
		<>
			<NavBar/>
			<div className={"container"}>
				<SideBar/>
				other pages
			</div>
		</>
	);
};

export default App;