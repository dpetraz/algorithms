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
/**
var list1 = new Sll();
var list2 = new Sll();
var list3 = new Sll();
var list4 = new Sll();
list1.add('23')
*/

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


// console.log(list.head);

list.reverse();

// console.log(list.head);



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
    // console.log(iterate)
    if (count++ > 100) throw new Error('hmm');
    // console.log(current.data + 'data')
    current = current.next
    iterate --;
  }
  return current;
}

// console.log(list.kthlast(1));

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

// console.log(list.kthlast2(4));

/**
ISPALINDROME

Create a method to return whether the sequence of list
values is a palindrome. With strings, palindromes read
the same front-to-back and back-to-front. Here,
compare node values as you would string characters.

Second-level challenge: depending on environment,
you might not have plentiful memory available. Can
you solve this without using an additional array?
*/
var plist = new Sll();
plist.add(new Node("r")).add("a").add("c").add("e").add('e').add("c").add("a").add("r")


Sll.prototype.isPalindrome = function() {
  if (!this.head){
    return false;
  }

  var array = [];
  var current = this.head;
  while (current){
    array.push(current.data)
    current = current.next;
  }

  var middle = Math.floor(array.length/2)
  for (var idx=0; idx < middle; idx++){
    if (array[idx] != array[array.length-idx-1]){
        return false;
    }
  }
  return true;
}

// console.log(plist.isPalindrome());

Sll.prototype.isPalindrome2 = function() {
  if (!this.head){
    return false;
  }
  var length = Math.floor(this.get_length()/2);
  var current = this.head;
  var k = 1;
  while (k <= length){
    if (current.data != this.kthlast(k).data){
        return false;
    }
    current = current.next;
    k++;
  }
  return true;
}

Sll.prototype.shift = function(new_head_node_position) {
  var prevHead=this.head;
  var previous=this.head;
  var current=this.head;

  var counter=0;

  while(current.next) {
    if (counter==new_head_node_position) {
      this.head = current;
      previous.next=null;
    }

    previous=current;
    current=current.next;
    counter++;

  }

  current.next=prevHead;
  return this;

}

// console.log(plist.isPalindrome2());
/**
SHIFT

Given a list, shift nodes to the right, by a given number
shiftBy. These shifts are circular: i.e. when shifting a
node off lists end, it should reappear at lists start. For
list (a)=>(b)=>(c), shift(1) should return (c)=>(a)=>(b)
*/

// console.log(list.head);
list.shift(1);
// console.log(list.head);

Sll.prototype.shift2 = function(new_head_node_position) {
  if (!this.head) { return this; }

  var length = 0;
  var runner = this.head;
  var tail;

  while(runner) {
    length++;
    tail   = runner;
    runner = runner.next;
  }

  new_head_node_position = Math.floor(new_head_node_position) % length;

  if (!new_head_node_position) { return this; }
  if (new_head_node_position > 0) { new_head_node_position -= length; }
  new_head_node_position++;
  var newTail = this.head;
  while(newTail.next && new_head_node_position < 0) {
    newTail = newTail.next;
    new_head_node_position++;
  }

  var newHead = newTail.next;
  tail.next = this.head;
  newTail.next = null;
  this.head = newHead;

  return this;
};

list.shift2(1);
console.log(list.head);

/**
LOOP SETUP

create a sequence of LinkedList Nodes that form a
closed loop. The first parameter signifies how many
nodes total, and the second parameter represents which
node should be pointed to by the last node. Give nodes
their node number as val, for clarity. Calling
setupLoop(5, 3) should return a circular list of
(1)=>(2)=>(3)=>(4)=>(5)=>(3)...
*/


Sll.prototype.setupLoop = function(k){
  if(!this.head){
    return false;
  }
  var tail=this.head;
  while(tail.next){
    tail=tail.next;
  }
  tail.next = this.kthlast(k);

  return this;
};

list.setupLoop(3);
console.log(list.head);
//(1)=>(2)=>(3)=>(4)=>(5)=>(3)...

/**
HASLOOP

Given a linked list, determine whether it has a loop,
and return a boolean accordingly.
*/
Sll.prototype.hasLoop = function(){
  if(!this.head){
    return false;
  }
  var runner = this.head.next;
  var follower = this.head
  while(runner && runner.next){
    if (runner == follower){
      return true;
    }
    runner = runner.next.next
    follower = follower.next
  }
  return false;
}

/**
The error originated from the shift2 method, in a console.log()
we incremented 'new_head_node_position', but later deleted that console.log(),
(incrementing is important to that method),
thus, the shift2 method broke, resulting in no loop being set
and our hasLoop not having a head, which then returned false. Whoops...
*/

console.log(list.hasLoop());
