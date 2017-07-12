function Node(data) {
  if (!(this instanceof Node)) {
    return new Node(data)
    // do something
  }
  this.data=data;
  this.next=null;
}

/**
var node = new Node(10);
node.data
=> 10
node.next
=> null
*/

function Sll() {
  if (!(this instanceof Sll)) {
    return new Sll();
  }

  this.head = null;
}

Sll.prototype.add = function(node) {
  if (!(node instanceof Node)) {
     node = new Node(node);
  }

  node.next = this.head
  this.head = node;
  return this;

}

Sll.prototype.get_length = function() {
  var current=this.head
  var count=0;
  while (current) {
    count++;
    current=current.next
  }
  return count;
}

/**
REVERSE

Create a method in the LinkedList class that reverses the
sequence of nodes in the list.
*/

Sll.prototype.reverse = function() {
  var current=this.head;
  var next=null;
  var prev=null;
  while (current) {
    next=current.next;
    current.next=prev;
    prev=current;
    current=next;
  }
  this.head=prev;
}

var list = Sll();

for (var i =0; i < 10; i++) {
  list.add(new Node(i));
}
// for (var i =0; i < 10; i++) {
//   list.add(i);
// }


console.log(list.head);

list.reverse();

console.log(list.head);
