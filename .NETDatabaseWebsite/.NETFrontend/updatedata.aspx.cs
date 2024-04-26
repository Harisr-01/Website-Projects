using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

namespace Sample
{
    public partial class updatedata : System.Web.UI.Page
    {
        private string connectionString = "Data Source=HARISHP;Initial Catalog=Test;Integrated Security=True";
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                fillDropDown();
            }
        }
        protected void fillDropDown()
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand("SELECT [Car_ID] FROM [Test].[dbo].[Cars]", connection))
                {
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    ddlRecordID.DataSource = reader;
                    ddlRecordID.DataTextField = "Car_ID";
                    ddlRecordID.DataBind();
                }
            }
        }
        protected void ddlRecordID_SelectedIndexChanged(object sender, EventArgs e)
        {
            int recordID = Convert.ToInt32(ddlRecordID.SelectedValue);
            getInitialData(recordID);
        }
        protected void getInitialData(int recordID)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand("SELECT [Car_Name], [Car_Brand], [Car_Status] FROM [Test].[dbo].[Cars] WHERE [Car_ID] = @RecordID", connection))
                {
                    command.Parameters.AddWithValue("@RecordID", recordID);
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    if (reader.Read())
                    {
                        txtColumn1.Text = reader["Car_Name"].ToString();
                        txtColumn2.Text = reader["Car_Brand"].ToString();
                        txtColumn3.Text = reader["Car_Status"].ToString();
                    }
                }
            }
        }
        protected void btnUpdate_Click(object sender, EventArgs e)
        {
            int recordID = Convert.ToInt32(ddlRecordID.SelectedValue);
            string column1 = txtColumn1.Text;
            string column2 = txtColumn2.Text;
            string column3 = txtColumn3.Text;
            updateRecord(column1, column2, column3, recordID);
            clarification.Text = $"Record {recordID} has been update to: {column1}, {column2}, {column3}";
        }
        protected void updateRecord(string recordname, string recordbrand, string recordstatus, int recordid)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand("UpdateRecord", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@NewColumn1", recordname);
                    command.Parameters.AddWithValue("@NewColumn2", recordbrand);
                    command.Parameters.AddWithValue("@NewColumn3", recordstatus);
                    command.Parameters.AddWithValue("@RecordID", recordid);
                    connection.Open();
                    command.ExecuteNonQuery();
                }
            }
        }
    }
}