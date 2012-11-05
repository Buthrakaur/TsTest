///<reference path="libs/jasmine.d.ts" />
///<reference path="../../TsTest/Scripts/libs/knockout-2.2.d.ts" />
///<reference path="../../TsTest/Scripts/Products.ts" />

describe("Product tests", () => {
    var p = new Products.Product(1, 'Product 1');

    it("Product should be initialized", () => {
        expect(p.productNumber).toBe(1);
        expect(p.name).toBe("Product 1");
    });
});
