const LinkedList = require('./ReverseLinkedList.js');
const expect = require('chai').expect;

describe('Reverse linked list', () => {

  it('should not throw an error for empty linked list', (done) => {
    var linked = new LinkedList();
    linked.reverse();
    done();
  });

  it('Should work for list of size 1', done => {
    var linked = new LinkedList();
    linked.addToTail(3);
    var store = linked.toArray().reverse();
    linked.reverse();
    var newStore = linked.toArray()
    for(var i = 0; i < store.length; i++) {
      expect(newStore[i] === store[i]).to.equal(true);
    }
    done()

  });

  it('should work for list of size 2', (done) => {
    var linked = new LinkedList();
    linked.addToTail(3);
    linked.addToTail(5);
    var store = linked.toArray().reverse();
    linked.reverse();
    var newStore = linked.toArray()
    for(var i = 0; i < store.length; i++) {
      expect(newStore[i] === store[i]).to.equal(true);
    }
    done()
  });

  it('should work for linked list of arbitrary size', (done) => {
    var linked = new LinkedList();
    for(var i = 0; i < 500; i++) {
      linked.addToTail(i);
    }
    var store = linked.toArray().reverse();
    linked.reverse();
    var newStore = linked.toArray()
    for(var i = 0; i < store.length; i++) {
      expect(newStore[i] === store[i]).to.equal(true);
    }
    done();
  })
});
