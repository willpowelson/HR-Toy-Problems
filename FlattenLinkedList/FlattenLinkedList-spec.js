const LinkedList = require('./FlattenLinkedList.js');
const expect = require('chai').expect;

//helper function for tests, do not alter, do not use to solve the problem
LinkedList.prototype.toArray=function(){var e=[],t=function(a){for(var r=a;r;)r.value.head?t(r.value.head):e.push(r),r=r.next};return t(this.head),e};


describe('Flatten Linked List loop', () => {

  it('Should work with a single node', (done) => {
    var list = new LinkedList();
    list.addToTail(1);
    var ref = list.head;
    list.flatten()
    expect(ref === list.head).to.equal(true);
    done()
  });

  it('should properly flatten a list of linked lists', (done) => {
    var list1 = new LinkedList()
    var list2 = new LinkedList()
    var list3 = new LinkedList()
    for(var i = 0; i < 5; i++) {
      list1.addToTail(i);
      list2.addToTail(i+5);
      list3.addToTail(i+10);
    }
    var master = new LinkedList();
    master.addToTail(list1);
    master.addToTail(list2);
    master.addToTail(list3);
    var tester = master.toArray();
    master.flatten();
    var curr = master.head;
    for(var i = 0; curr; i++) {
      expect(curr === tester[i]).to.equal(true);
      curr = curr.next;
    }
    expect(i).to.equal(15);
    done();
  });

  it('should properly flatten a list with linked list nodes and regular nodes', (done) => {
        var list1 = new LinkedList()
    var list2 = new LinkedList()
    var list3 = new LinkedList()
    for(var i = 0; i < 5; i++) {
      list1.addToTail(i);
      list2.addToTail(i+5);
      list3.addToTail(i+10);
    }
    var master = new LinkedList();
    master.addToTail(22)
    master.addToTail(list1);
    master.addToTail(20)
    master.addToTail(list2);
    master.addToTail(21)
    master.addToTail(list3);
    master.addToTail(23)
    var tester = master.toArray();
    master.flatten();
    var curr = master.head;
    for(var i = 0; curr; i++) {
      expect(curr === tester[i]).to.equal(true);
      curr = curr.next;
    }
    expect(i).to.equal(19);
    done();
  });
});