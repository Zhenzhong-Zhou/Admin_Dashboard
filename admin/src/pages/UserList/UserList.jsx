import {DataGrid} from "@mui/x-data-grid";
import "./styles.css";
import user from "../../assets/images/user2.png";

const UserList = () => {
	const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'username',
			headerName: 'Username',
			width: 150,
			editable: true,
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 150,
			editable: true,
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 150,
			editable: true,
		},
		{
			field: 'transaction',
			headerName: 'Transaction Volume',
			width: 200,
			editable: true,
		}
	];

	const rows = [
		{ id: 1, username: 'Jon Snow', avatar: user, email: "jon@gamil.com", status: "active", transaction: "$120.00",}
	];

	return (
		<div className={"userList"}>
			<DataGrid columns={columns} rows={rows} pageSize={5} checkboxSelection/>
		</div>
	);
};

export default UserList;