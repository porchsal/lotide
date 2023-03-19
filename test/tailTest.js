const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
    it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
        assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });

    it("returns [2,3,4,5] for [1,2,3,4,5]", () => {
        assert.equal(tail([1,2,3,4,5]).length, 4);
    });

});