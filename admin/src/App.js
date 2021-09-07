import {NavBar, SideBar} from "./components";
import "./App.css";
import {Home, NewUser, User, UserList} from "./pages";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<NavBar/>
			<div className={"container"}>
				<SideBar/>
				<Switch>
					<Route exact path={"/"}>
						<Home/>
					</Route>
					<Route exact path={"/users"}>
						<UserList/>
					</Route>
					<Route exact path={"/user/:userId"}>
						<User/>
					</Route>
					<Route exact path={"/newUser"}>
						<NewUser/>
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;