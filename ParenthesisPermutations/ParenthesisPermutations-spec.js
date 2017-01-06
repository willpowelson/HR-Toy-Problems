const ParenthesisPermutations = require('./ParenthesisPermutations.js');
const expect = require('chai').expect;

describe('Parenthesis Permutations', () => {
  it('should return an empty array for N = 0', (done) => {
    const tester = ParenthesisPermutations(0);
    expect(tester).to.eql(['']);
    done()
  });

  it('should return the correct array for N = 2', (done) => {
    const tester = ParenthesisPermutations(2).sort();
    expect(tester).to.eql([ '(())', '()()' ]);
    done()
  });

  it('should return the correct array for N = 3', (done) => {
    const tester = ParenthesisPermutations(3).sort();
    expect(tester).to.eql([ '((()))',
      '(())()',
      '(())()',
      '()(())',
      '()()()' ]);
    done();
  })

  it('should return the correct array for N = 4', (done) => {
    const tester = ParenthesisPermutations(4).sort();
    expect(tester).to.eql([ '(((())))',
      '((()))()',
      '((()))()',
      '((()))()',
      '(())(())',
      '(())(())',
      '(())(())',
      '(())()()',
      '(())()()',
      '(())()()',
      '()((()))',
      '()(())()',
      '()(())()',
      '()()(())',
      '()()()()' ].sort())
    done()
  });
});