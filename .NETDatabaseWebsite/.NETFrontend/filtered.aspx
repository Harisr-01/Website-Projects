<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="filtered.aspx.cs" Inherits="Sample.Index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<style>
body{
    font-family: Arial;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>
<body>
    <h1>Car Database</h1>
    <ul>
        <li><a href="main.aspx">Home</a></li>
        <li><a href="adddata.aspx">Add new Data</a></li>
        <li><a href="updatedata.aspx">Update Data</a></li>
        <li><a href="deletedata.aspx">Delete Data</a></li>
    </ul>
    <form id="form1" runat="server">
        <div>
            <asp:GridView ID="GridView" runat="server" AutoGenerateColumns="False">
                <Columns>
                    <asp:BoundField DataField="Car_Name" HeaderText="Car_Name" SortExpression="Car_Name" />
                    <asp:BoundField DataField="Car_Brand" HeaderText="Car_Brand" SortExpression="Car_Brand" />
                    <asp:BoundField DataField="Car_Status" HeaderText="Car_Status" SortExpression="Car_Status" />
                    <asp:BoundField DataField="Car_ID" HeaderText="Car_ID" SortExpression="Car_ID" />
                </Columns>
            </asp:GridView>
        </div>
    </form>
</body>
</html>
