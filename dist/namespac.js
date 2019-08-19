"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function namespac(namespaces) {
    var env = global || window;
    if (typeof namespaces !== "string") {
        throw new Error("Namespaces should be of the string type");
    }
    if (namespaces.length === 0) {
        throw new Error("Namespaces cannot be empty.");
    }
    return namespaces
        .trim()
        .split(".")
        .reduce(function (lastObj, nextObj) { return (lastObj[nextObj] = lastObj[nextObj] || {}); }, env);
}
exports.namespac = namespac;
