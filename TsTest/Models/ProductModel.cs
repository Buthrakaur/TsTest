using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TsTest.Models
{
	public class ProductModel
	{
		public int ProductNumber { get; private set; }
		public string Name { get; private set; }

		public ProductModel(int productNumber, string name)
		{
			ProductNumber = productNumber;
			Name = name;
		}
	}
}