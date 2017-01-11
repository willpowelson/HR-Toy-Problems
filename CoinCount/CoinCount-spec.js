const CoinCount = require('./CoinCount');
const expect = require('chai').expect;

describe('CoinCount', () => {
  it('Should return 1 for 0 cents', (done) => {
    const tester = CoinCount(0);
    expect(tester).to.equal(1);
    done();
  });

  it('Should return the correct value for 5 cents', (done) => {
    const tester = CoinCount(25);
    expect(tester).to.equal(13);
    done();
  });

  it('Should return the correct value for a dollar', (done) => {
    const tester = CoinCount(100);
    expect(tester).to.equal(242);
    done();
  });

  it('Should run in linear time', (done) => {
    const tester = CoinCount(10000);
    expect(tester).to.equal(134235101);
    done();
  });
});
