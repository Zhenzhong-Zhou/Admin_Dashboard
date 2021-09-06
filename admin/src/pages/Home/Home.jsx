import "./styles.css";
import {Chart, FeaturedInfo} from "../../components";
import {userData} from "../../boilerplateData";

const Home = () => {
	return (
		<div className={"home"}>
			<FeaturedInfo/>
			<Chart data={userData} title={"User Analytics"} grid dataKey={"Active User"}/>
		</div>
	);
};

export default Home;