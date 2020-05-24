var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should be able to add two numbers together', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(calculator.runningTotal, 5);
  });

  it('should be able to subtract one number from another', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  });

  it('should be able to multiply two numbers together', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  });

  it('should be able to divide one number by another', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  });

  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick(8);
    calculator.numberClick(7);
    calculator.numberClick(6);
    calculator.numberClick(2);
    assert.equal(calculator.runningTotal, 8762);
  });

  it('should chain multiple operations together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 12);
  });

});
