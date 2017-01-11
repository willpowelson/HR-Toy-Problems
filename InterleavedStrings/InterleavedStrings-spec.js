const interleavedStrings = require('./interleavedStrings');
const expect = require('chai').expect;

describe('InterleavedStrings', () => {
  it('Should return an array', (done) => {
    expect(Array.isArray(interleavedStrings('hi', 'hi'))).to.equal(true);
    done();
  })

  it('Should return the the same result regardless of input order', (done) => {
    var tester = interleavedStrings('bo', 'ji').sort();
    var reversedTester = interleavedStrings('ji', 'bo').sort();
    tester.forEach((entry, index = 0) => {
      expect(reversedTester[index++]).to.equal(entry)
    });
    done()
  })

  it('Should return the correct result for \'BN\', \'AX\'', (done) => {
    const preComputed = [ 'BNAX', 'BANX', 'BAXN', 'ABNX', 'ABXN', 'AXBN' ].sort()
    const tester = interleavedStrings('BN', 'AX').sort()
    expect(preComputed.length).to.equal(tester.length);
    preComputed.forEach((entry, index = 0) => {
      expect(tester[index++]).to.equal(entry)
    });
    done();
  });

  it('Should handle larger strings', (done) => {
    const preComputed = [ 'Realcool',
    'Reaclool',
    'Reacolol',
    'Reacooll',
    'Reacooll',
    'Recalool',
    'Recaolol',
    'Recaooll',
    'Recaooll',
    'Recoalol',
    'Recoaoll',
    'Recoaoll',
    'Recooall',
    'Recooall',
    'Recoolal',
    'Rcealool',
    'Rceaolol',
    'Rceaooll',
    'Rceaooll',
    'Rceoalol',
    'Rceoaoll',
    'Rceoaoll',
    'Rceooall',
    'Rceooall',
    'Rceoolal',
    'Rcoealol',
    'Rcoeaoll',
    'Rcoeaoll',
    'Rcoeoall',
    'Rcoeoall',
    'Rcoeolal',
    'Rcooeall',
    'Rcooeall',
    'Rcooelal',
    'Rcooleal',
    'cRealool',
    'cReaolol',
    'cReaooll',
    'cReaooll',
    'cReoalol',
    'cReoaoll',
    'cReoaoll',
    'cReooall',
    'cReooall',
    'cReoolal',
    'cRoealol',
    'cRoeaoll',
    'cRoeaoll',
    'cRoeoall',
    'cRoeoall',
    'cRoeolal',
    'cRooeall',
    'cRooeall',
    'cRooelal',
    'cRooleal',
    'coRealol',
    'coReaoll',
    'coReaoll',
    'coReoall',
    'coReoall',
    'coReolal',
    'coRoeall',
    'coRoeall',
    'coRoelal',
    'coRoleal',
    'cooReall',
    'cooReall',
    'cooRelal',
    'cooRleal',
    'coolReal' ].sort()
    const tester = interleavedStrings('Real', 'cool').sort()
    preComputed.forEach((entry, index = 0) => {
      expect(tester[index++]).to.equal(entry)
    });
    done()
  })
});