var assert = require("chai").assert;
var check = require("../luhn");

describe("Check credit card", function() {
  it("should return true if card is valid", function() {
    var word = "4290555253807188";
    var result = check(word);
    assert.isTrue(result);
  });

  it("should return false if card number is not valid", function() {
    var word = "12345678";
    assert.isFalse(check(word));
  });

});

