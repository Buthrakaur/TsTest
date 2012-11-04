///<reference path="../../TsTest/Scripts/Products.js" />
///<reference path="libs/jasmine.d.ts" />
///<reference path="../../TsTest/Scripts/libs/knockout-2.2.d.ts" />

describe("Product tests", () => {
    var p = new Product(1, 'Product 1');

    it("Product should be initialized", () => {
        expect(p.productNumber).toBe(1);
    });
});
