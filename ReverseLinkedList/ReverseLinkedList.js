/*
* Given a linked list, reverse it so given a linked list, do not change
*
* 1->3->6->2
*
* after the function is run the linked list will be
* 2->6->3->1
*
*/


var Node = function(value) {
  this.value = value;
  this.next = null;
}

var LinkedList = function() {
  this.head = null;
}

LinkedList.prototype.addToTail = function(value) {
  if (this.head === null) {
    var tmp = new Node(value);
    this.head = tmp;
    this.tail = tmp;
  } else {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
  }
};


//helper function for tests, do not alter
LinkedList.prototype.toArray = function() {
  var arr = [];
  var curr = this.head;
  while(curr) {
    arr.push(curr);
    curr = curr.next;
  }
  return arr;
};

//YOUR CODE HERE
LinkedList.prototype.reverse = function() {

}


module.exports = LinkedList;