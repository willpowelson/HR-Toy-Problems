/*
Find the middle node of a linked list, if the linked list is of even length
return the the (length/2) + 1 node 

e.g. the linked list
1->3->5->2

returns a node with value 5.

if the list is empty, return null
*/

/*
READ BUT DO NOTHING
*/

var Node = function(value) {
  this.value = value;
  this.next = null;
}

var LinkedList = function() {
  this.head = null;
  this.tail = null;
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


//Your function here
LinkedList.prototype.findMiddle = function() {
  var slow = this.head;
  var fast = this.head;
  if(fast) {
    fast = fast.next;
  }
  while(fast) {
    slow = slow.next;
    fast = fast.next;
    if(fast) {
      fast = fast.next
    }
  }
  return slow;
};


//don't worry about this
module.exports = LinkedList;