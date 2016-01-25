var expect = require('chai').expect;

describe('template strings', function () {
  it('should be a string', function () {
    var string = `abc`;
    expect(string).to.be.a('string');
  });

  it('can evaluate variables', function () {
    var bar = 'baz';
    var string = `foo ${bar}`;
    expect(string).to.equal('foo baz');
  });

  it('can execute functions', function () {
    var string = `The date is: ${new Date()}`;
    var date = new Date();
    expect(string).to.equal('The date is: ' + date);
  });

  it('evaluate expressions', function () {
    var sum = `${1+2}`;
    var string = `one + two is: ${sum}`;
    expect(string).to.equal(`one + two is: ` + sum);
  });

  it('handle multiline strings', function () {
    var string = `hello
    world`;
    expect(string).to.equal(`hello\n    world`);
  });

});
