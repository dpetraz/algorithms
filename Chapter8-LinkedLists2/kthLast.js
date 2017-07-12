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



/**
KTHLAST

Given k, return the value that is 'k' nodes from the list's
end. Specifically if given 1, return the list's last value. If
given 4, return the value at the node with exactly 3
nodes following it.
*/
var count = 0;

Sll.prototype.kthlast = function(k){
  if(k < 1 || !this.head){
    return null
  }
  var current = this.head;
  var counter = 0;
  while (current){
    counter++;
    current = current.next;

  }
  if (counter - k < 1) throw new Error('nope');

  current = this.head;
  var iterate  = counter - k;
  while(iterate){
    console.log(iterate)
    if (count++ > 100) throw new Error('hmm');
    console.log(current.data + 'data')
    current = current.next
    iterate --;
  }
  return current;
}

console.log(list.kthlast(1));

Sll.prototype.kthlast2 = function(k){
  if( k < 1 || !this.head){
    return null
  }
  var current = this.head;
  while (current && k){
    current = current.next;
    k --;
  }
  if(k) throw new Error('no range');
  var follower = this.head;
  while (current){
   current = current.next;
   follower = follower.next;
  }
  return follower.data;

}

console.log(list.kthlast2(4)); 
