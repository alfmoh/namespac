"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var namespac_1 = require("./namespac");
var chai_1 = require("chai");
// tslint:disable:typedef
describe("namespac", function () {
    it("should create a test check", function () {
        // arrange
        // act
        // asset
        chai_1.expect(true).to.not.equal(false);
    });
    it("should be a function", function () {
        // arrange
        // act
        // assert
        chai_1.expect(typeof namespac_1.namespac).to.equal("function");
    });
    it("should return an object", function () {
        // arrange
        var result = namespac_1.namespac("a."), result2 = namespac_1.namespac("a,b");
        // act
        // assert
        chai_1.expect(typeof result).equal("object");
        chai_1.expect(typeof result2).equal("object");
    });
    it("should exist on global object", function () {
        // arrange
        var env;
        // act
        namespac_1.namespac("a"), (env = global || window);
        // assert
        chai_1.expect(env.hasOwnProperty("a")).equal(true);
    });
    it("should have nested objects", function () {
        // arrange
        var env;
        // act
        namespac_1.namespac("a.b.c"), (env = global || window);
        // assert
        chai_1.expect(env.a.hasOwnProperty("b")).equal(true);
        chai_1.expect(env.a.b.hasOwnProperty("c")).equal(true);
    });
    it("should have specific number of nested objects", function () {
        // arrange
        var env;
        // act
        namespac_1.namespac("c.b"), (env = global || window);
        // assert
        chai_1.expect(Object.keys(env.c).length).equal(1);
    });
    it("should throw an error when passed an empty string", function () {
        // arrange
        var result;
        // act
        result = function () { return namespac_1.namespac(""); };
        // assert
        chai_1.expect(result).to.throw("Namespaces cannot be empty.");
    });
    it("should throw an error when argument is not a string", function () {
        // arrange
        var result;
        // act
        result = function () { return namespac_1.namespac.call(null, 1); };
        // assert
        chai_1.expect(result).to.throw("Namespaces should be of the string type");
    });
});
