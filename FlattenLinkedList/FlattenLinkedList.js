/*
* Given a linked list where some nodes' values are themselves a linked list
* return a single linked list containing all the nodes from each linked
* list such that they are ordered according first to the appearance of their
* linked lists and second to their appearance within their sublist. 
*
* example:
* 7->2->8->5->3
* |  |     |  |
* v  v     v  v
* 1  12    6  9
* |        |  
* v        v  
* 11      13
*
* becomes:
* 7->1->11->2->12->8->5->6->13->3->9
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


//YOUR CODE HERE
LinkedList.prototype.flatten = function() {

}

module.exports = LinkedList;
