const LinkedList = require('./SplitLinkedList.js');
const expect = require('chai').expect;

describe('Split Linked List', () => {

  it('should return null for an empty list', (done) => {
    var linked = new LinkedList();
    expect(linked.findMiddle()).to.equal(null)
    done();
  });

  it('should return a node for a non-empty list', (done) => {
    var linked = new LinkedList();    
    linked.addToTail(3);
    linked.addToTail(1);
    linked.addToTail(5);
    expect(linked.findMiddle().constructor.name).to.equal('Node');
    done();
  });

  it('should handle lists of length 1', (done) => {
    var linked = new LinkedList();    
    linked.addToTail(3);
    expect(linked.findMiddle().value).to.equal(3);
    done();
  })

  it('should split an odd list correctly', (done) => {
    var linked = new LinkedList();    
    linked.addToTail(3);
    linked.addToTail(1);
    linked.addToTail(5);
    linked.addToTail(-6);
    linked.addToTail(7);
    linked.addToTail(-3);
    linked.addToTail(5);
    expect(linked.findMiddle().value).to.equal(-6)
    done()
  });

  it('should split an even list correctly', (done) => {
    var linked = new LinkedList();    
    linked.addToTail(3);
    linked.addToTail(1);
    linked.addToTail(5);
    linked.addToTail(7);
    linked.addToTail(-3);
    linked.addToTail(5);
    expect(linked.findMiddle().value).to.equal(7);
    done();
  })
})