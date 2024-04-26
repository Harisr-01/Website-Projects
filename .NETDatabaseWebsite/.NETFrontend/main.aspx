<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="main.aspx.cs" Inherits="Sample.main" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Car Database</title>
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
            <h1>Filter Data By:</h1>
        </div>
        <asp:Button ID="Button3" runat="server" Text="Less Than and 2016" OnClick="ButtonFilter2_Click"/>
        <asp:Button ID="Button1" runat="server" Text="Greater Than 2016" OnClick="ButtonFilter1_Click" />
        <asp:Button ID="Button2" runat="server" Text="All" OnClick="All_Click"/>
    </form>
</body>
</html>
