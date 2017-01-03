const LinkedList = require('./LinkedListLoop.js');
const expect = require('chai').expect;

describe('Split Linked List', () => {

  it('should return false for an empty list', (done) => {
    var linked = new LinkedList();
    expect(linked.hasLoop()).to.equal(false)
    done();
  });

  it('should find loops on a small list', done => {
    var linked = new LinkedList();
    linked.addToHead(3)
    linked.head.next = linked.head;
    expect(linked.hasLoop()).to.equal(true);
    done()

  });

  it('should find loops on a big list', (done) => {
    var linked = new LinkedList();
    linked.addToHead(0);
    var tail = linked.head;
    for(var i = 1; i < 500; i++) {
      linked.addToHead(i);
    }

    tail.next = linked.head;

    for(i; i < 1000; i++) {
      linked.addToHead(i);
    }
    expect(linked.hasLoop()).to.equal(true);
    done();
  });

  it('should return false on a normal linked list', (done) => {
    var linked = new LinkedList();
    for(var i = 0; i < 500; i++) {
      linked.addToHead(i);
    }
    expect(linked.hasLoop()).to.equal(false);
    done();
  })
});

  // it('should find loops on a big list' done =>)