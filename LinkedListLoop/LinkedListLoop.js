/*
Given a linked list, determine whether or not it contains a loop, consider the following diagram

1->3->5->7
   ^     |
   |     v
   6<-8<-9

If you attempt to traverse this linked list you will never reach an end, 
write a function that correctly determines whether a linked list contains
such a loop.

Your function should return a boolean value
*/


var Node = function(value) {
  this.value = value;
  this.next = null;
}

var LinkedList = function() {
  this.head = null;
}

LinkedList.prototype.addToHead = function(value) {
  var tmp = new Node(value);
  tmp.next = this.head;
  this.head = tmp;
};

//YOUR FUNCTION HERE

LinkedList.prototype.hasLoop = function() {

};


//ignore this
module.exports = LinkedList;