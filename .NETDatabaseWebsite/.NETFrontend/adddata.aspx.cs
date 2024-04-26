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
    public partial class adddata : System.Web.UI.Page
    {
        private string connectionString = "Data Source=HARISHP;Initial Catalog=Test;Integrated Security=True";
        public void addNewRecord(string param1, string param2, int param3)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand("InsertNewRecord", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@Param1", param1);
                    command.Parameters.AddWithValue("@Param2", param2);
                    command.Parameters.AddWithValue("@Param3", param3);
                    connection.Open();
                    command.ExecuteNonQuery();
                }
            }
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }
        protected void btnInsert_Click(object sender, EventArgs e)
        {
            string param1 = txtParam1.Text;
            string param2 = txtParam2.Text;
            int param3 = Convert.ToInt32(txtParam3.Text);
            addNewRecord(param1, param2, param3);
            clarification.Text = "Record added to Database";
        }
    }
}