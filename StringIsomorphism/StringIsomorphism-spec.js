const StringIsomorphism = require('./StringIsomorphism.js');
const expect = require('chai').expect;

describe('StringIsomorphism', () => {

  it('Should return false if strings are different lengths', (done) => {
    const str1 = 'man';
    const str2 = 'ma';
    expect(StringIsomorphism(str1, str2)).to.equal(false);
    done();
  });

  it('Should return true for simple strings', (done) => {
    const str1 = 'abcx';
    const str2 = 'zlmn';
    expect(StringIsomorphism(str1, str2)).to.equal(true);
    done();
  });
  it('Should return false for non-isomorphic strings', (done) => {
    const str1= 'hello';
    const str2 = 'lello';
    expect(StringIsomorphism(str1, str2)).to.equal(false);
    done();
  });

  it('Should work on mildly complicated strings', (done) => {
    const str1 = 'paper bin';
    const str2 = 'title man';
    expect(StringIsomorphism(str1, str2)).to.equal(true);
    done();
  });
});