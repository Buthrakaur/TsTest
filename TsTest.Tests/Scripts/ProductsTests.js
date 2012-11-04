describe("Product tests", function () {
    var p = new Product(1, 'Product 1');
    it("Product should be initialized", function () {
        expect(p.productNumber).toBe(1);
    });
});
