const LinkedList = require('./LinkedListLoop.js');
const expect = require('chai').expect;

describe('Linked List loop', () => {

  it('should return false for an empty list', (done) => {
    var linked = new LinkedList();
    expect(linked.hasLoop()).to.equal(false)
    done();
  });

  it('should find loops on a small list', done => {
    var linked = new LinkedList();
    linked.addToTail(3)
    linked.tail.next = linked.head;
    expect(linked.hasLoop()).to.equal(true);
    done()

  });

  it('should find loops on a big list', (done) => {
    var linked = new LinkedList();
    for(var i = 1; i < 500; i++) {
      linked.addToTail(i);
    }
    var linkup = linked.tail;

    for(i; i < 750; i++) {
      linked.addToTail(i);
    }

    var breaker = linked.tail;
    
    for(i; i < 1000; i++) {
      linked.addToTail(i);
    }

    breaker.next = linkup;

    expect(linked.hasLoop()).to.equal(true);
    done();
  });

  it('should return false on a normal linked list', (done) => {
    var linked = new LinkedList();
    for(var i = 0; i < 500; i++) {
      linked.addToTail(i);
    }
    expect(linked.hasLoop()).to.equal(false);
    done();
  })
});

  // it('should find loops on a big list' done =>)