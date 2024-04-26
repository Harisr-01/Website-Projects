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
    public partial class Index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                string option = Request.QueryString["option"];
                if (!string.IsNullOrEmpty(option))
                {
                    string connectionString = "Data Source=HARISHP;Initial Catalog=Test;Integrated Security=True";
                    string storedProcedureName = "";

                    // Set the stored procedure name based on the selected option
                    if (option == "1")
                    {
                        storedProcedureName = "Greaterthan2016";
                    }
                    if (option == "2")
                    {
                        storedProcedureName = "Lessthan2016";
                    }
                    // Add more conditions as needed

                    // Fetch data using stored procedure
                    DataTable dt = new DataTable();
                    using (SqlConnection conn = new SqlConnection(connectionString))
                    {
                        using (SqlCommand cmd = new SqlCommand(storedProcedureName, conn))
                        {
                            cmd.CommandType = CommandType.StoredProcedure;
                            // Add parameters if needed
                            using (SqlDataAdapter da = new SqlDataAdapter(cmd))
                            {
                                da.Fill(dt);
                            }
                        }
                    }

                    // Bind data to the GridView
                    GridView.DataSource = dt;
                    GridView.DataBind();
                }
            }
        }

    }
    }