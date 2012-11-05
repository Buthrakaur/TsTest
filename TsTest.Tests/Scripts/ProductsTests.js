describe("Product tests", function () {
    var p = new Products.Product(1, 'Product 1');
    it("Product should be initialized", function () {
        expect(p.productNumber).toBe(1);
        expect(p.name).toBe("Product 1");
    });
});
