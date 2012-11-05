/// <reference path="libs/knockout-2.2.d.ts" />

module Products {

    export class Product {
        constructor (public productNumber: number, public name: string) { 
        }
    }

    export class ProductListViewModel {
        public products: KnockoutObservableArray = ko.observableArray();
        public selectedProduct: KnockoutObservableAny = ko.observable();
        public selectedProductName: KnockoutComputed;
        public selectedProductNumber: KnockoutComputed;

        constructor (elementId: string, products: Product[]) { 
            for (var i = 0; i < products.length; i++) this.addProduct(products[i]);

            this.selectedProductName = ko.computed(() => {
                if (!this.selectedProduct()) return null;
                return this.selectedProduct().name;
            });
            this.selectedProductNumber = ko.computed(() => {
                if (!this.selectedProduct()) return null;
                return this.selectedProduct().productNumber;
            });

            ko.applyBindings(this, document.getElementById(elementId));
        }

        addProduct(product: Product) {
            this.products.push(product);
        }

        selectProduct(product: Product) {
            this.selectedProduct(product);
        }
    }
}
