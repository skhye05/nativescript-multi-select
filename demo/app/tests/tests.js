var MultiSelect = require("nativescript-multi-select").MultiSelect;
var multiSelect = new MultiSelect();

describe("greet function", function() {
    it("exists", function() {
        expect(multiSelect.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(multiSelect.greet()).toEqual("Hello, NS");
    });
});