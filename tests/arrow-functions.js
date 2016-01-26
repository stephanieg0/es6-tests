var expect = require('chai').expect;

describe('arrow functions', function () {
  it('is shorter to write', function() {
    var fn = () => {
      return 'Hello World';
    };
    expect(fn()).to.equal('Hello World');
  });

  it('one parameter can be written without parents', function () {
    var fn = name => {
      return `Hello ${name}`;
    };
    expect(fn('Stephanie')).to.equal('Hello Stephanie');
  });

  it('binds "this" to the function', function (done) {
    var that = this;
    setTimeout(() => {
      expect(that).to.eql(this);
      done();
    }, 0);
  });

  it('binds "this" to the function', function () {
    this.foo = 'bar';

    var fn = () => {
    return this.foo;
    };
    expect(fn()).to.equal('bar');
  });
});

describe('blocked scope', function (){
  it('should define let inside a block', function () {
    "use strict";
    let x = '?';
    function LetTest (){
      let x = 'hello';
      if (true){
        let x = 'good bye';
      }
      expect(x).to.equal('hello');
    }
    expect(x).to.equal('?');
  });

  it('should not redefine a variable', function () {
    const y = 'hello';
    y = 'world';
    expect(y).to.not.equal('world');
  });

});

describe('destructuring method', function (){
  it('should assign value to variables in order', function (){
    var [a, b] = [1, 2];
    expect(a).to.equal(1);
  });
});
