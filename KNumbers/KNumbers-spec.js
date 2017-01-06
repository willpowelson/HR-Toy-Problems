const KNumbers = require('./KNumbers.js');
const expect = require('chai').expect;

describe('KNumbers', () => {
  it('should return the correct value for K = 10, N = 2', (done) => {
    const tester = KNumbers(10, 2);
    expect(tester).to.equal(90);
    done();
  });

  it('should return the correct value for K=5, N = 5', (done) => {
    const tester = KNumbers(5,5);
    expect(tester).to.equal(2240);
    done();
  });

  it('should be mildly efficient', (done) => {
    const medium = KNumbers(10, 8);
    expect(medium).to.equal(85096170);
    done();
  });

  it('EXTRA CREDIT: Should handle large inputs', (done) => {
    const big = KNumbers(10, 30);
    expect(big).to.equal(6.948918391790005e+29);
    done();
  });
})