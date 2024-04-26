using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Sample
{
    public partial class main : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void ButtonFilter1_Click(object sender, EventArgs e)
        {
            Response.Redirect("filtered.aspx?option=1");
        }
        protected void ButtonFilter2_Click(object sender, EventArgs e)
        {
            Response.Redirect("filtered.aspx?option=2");
        }
        protected void All_Click(object sender, EventArgs e)
        {
            Response.Redirect("all.aspx");
        }
    }
}