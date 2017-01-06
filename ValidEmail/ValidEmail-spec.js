const ValidEmail = require('./ValidEmail');
const expect = require('chai').expect;

describe('Valid Email', () => {
  it('Should return 0 for inputs less than 3', (done) => {
    expect(ValidEmail(0)).to.equal(0);
    expect(ValidEmail(2)).to.equal(0);
    done();
  });

  it('Should return the correct value for string size 3', (done) => {
    expect(ValidEmail(3)).to.equal(143312);
    done();
  });

  it('Should return the correct value for string size 4', (done) => {
    expect(ValidEmail(4)).to.equal(7592832);
    done()
  });

  it('EXTRA CREDIT: Should be able to handle large inputs', (done) => {
    expect(ValidEmail(20)).to.equal(2.926769874182472e+34);
    done();
  });
})