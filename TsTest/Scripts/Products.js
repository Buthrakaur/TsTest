var Products;
(function (Products) {
    var Product = (function () {
        function Product(productNumber, name) {
            this.productNumber = productNumber;
            this.name = name;
        }
        return Product;
    })();
    Products.Product = Product;    
    var ProductListViewModel = (function () {
        function ProductListViewModel(elementId, products) {
            var _this = this;
            this.products = ko.observableArray();
            this.selectedProduct = ko.observable();
            for(var i = 0; i < products.length; i++) {
                this.addProduct(products[i]);
            }
            this.selectedProductName = ko.computed(function () {
                if(!_this.selectedProduct()) {
                    return null;
                }
                return _this.selectedProduct().name;
            });
            ko.applyBindings(this, document.getElementById(elementId));
        }
        ProductListViewModel.prototype.addProduct = function (product) {
            this.products.push(product);
        };
        ProductListViewModel.prototype.selectProduct = function (product) {
            this.selectedProduct(product);
        };
        return ProductListViewModel;
    })();
    Products.ProductListViewModel = ProductListViewModel;    
})(Products || (Products = {}));

