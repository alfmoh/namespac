import { namespac } from "./namespac";

import { expect } from "chai";

// tslint:disable:typedef
describe("namespac", () => {
  it("should create a test check", () => {
    // arrange
    // act
    // asset
    expect(true).to.not.equal(false);
  });

  it("should be a function", () => {
    // arrange
    // act
    // assert
    expect(typeof namespac).to.equal("function");
  });
  it("should return an object", () => {
    // arrange
    let result = namespac("a."),
      result2 = namespac("a,b");
    // act
    // assert
    expect(typeof result).equal("object");
    expect(typeof result2).equal("object");
  });
  it("should exist on global object", () => {
    // arrange
    let env;
    // act
    namespac("a"), (env = global || window);
    // assert
    expect(env.hasOwnProperty("a")).equal(true);
  });
  it("should have nested objects", () => {
    // arrange
    let env;
    // act
    namespac("a.b.c"), (env = global || window);
    // assert
    expect(env.a.hasOwnProperty("b")).equal(true);
    expect(env.a.b.hasOwnProperty("c")).equal(true);
  });
  it("should have specific number of nested objects", () => {
    // arrange
    let env;
    // act
    namespac("c.b"), (env = global || window);
    // assert
    expect(Object.keys(env.c).length).equal(1);
  });
  it("should throw an error when passed an empty string", () => {
    // arrange
    let result;
    // act
    result = () => namespac("");
    // assert
    expect(result).to.throw("Namespaces cannot be empty.");
  });
  it("should throw an error when argument is not a string", () => {
    // arrange
    let result;
    // act
    result = () => namespac.call(null, 1);
    // assert
    expect(result).to.throw("Namespaces should be of the string type");
  });
});
