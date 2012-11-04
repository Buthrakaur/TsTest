/// <reference path="libs/knockout-2.2.d.ts" />

module Products {

    export class Product {
        constructor (public productNumber: number, public name: string) { 
        }
    }

    export class ProductListViewModel {
        public products: KnockoutObservableArray = ko.observableArray();
        public selectedProduct: KnockoutObservableAny = ko.observable();

        constructor (elementId: string, products: Product[]) { 
            for (var i = 0; i < products.length; i++) this.addProduct(products[i]);

            ko.applyBindings(this, document.getElementById(elementId));
        }

        addProduct(product: Product) {
            this.products.push(product);
        }
         
        selectProduct(product: Product) {
            //*rozbity this
            this.selectedProduct(product);
        }
    }
}
