<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="updatedata.aspx.cs" Inherits="Sample.updatedata" %>

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
            <h1>Update a Record:</h1>
        </div>
        <p>Record ID to Choose:</p>
            <asp:DropDownList ID="ddlRecordID" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddlRecordID_SelectedIndexChanged"></asp:DropDownList><br />
        <p>Car Name:</p>
            <asp:TextBox ID="txtColumn1" runat="server"></asp:TextBox><br />
        <p>Car Brand:</p>
            <asp:TextBox ID="txtColumn2" runat="server"></asp:TextBox><br />
        <p>Car Year:</p>
            <asp:TextBox ID="txtColumn3" runat="server"></asp:TextBox><br />
        <asp:Button ID="btnUpdate" runat="server" Text="Update Record" OnClick="btnUpdate_Click"/>
        <asp:Label ID="clarification" runat="server" Text=" "></asp:Label>
    </form>
</body>
</html>
