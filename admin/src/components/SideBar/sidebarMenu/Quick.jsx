import {AttachMoney, BarChart, PermIdentity, Storefront} from "@material-ui/icons";
import "./styles.css";

const Quick = () => {
	return (
		<div className={"sidebarMenu"}>
		<h3 className={"sidebarTitle"}>Quick Menu</h3>
			<ul className={"sidebarList"}>
				<li className={"sidebarListItem"}><PermIdentity className={"sidebarIcon"}/>Users</li>
				<li className={"sidebarListItem"}><Storefront className={"sidebarIcon"}/>Products</li>
				<li className={"sidebarListItem"}><AttachMoney className={"sidebarIcon"}/>Transactions</li>
				<li className={"sidebarListItem"}><BarChart className={"sidebarIcon"}/>Reports</li>
			</ul>
		</div>
	);
};

export default Quick;