using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TsTest.Models;

namespace TsTest.Controllers
{
	public class ProductsController : Controller
	{
		public ActionResult Index()
		{
			return View(Enumerable.Range(1, 20)
				            .Select(x => new ProductModel(x, "product " + x))
				            .ToArray());
		}
	}
}
