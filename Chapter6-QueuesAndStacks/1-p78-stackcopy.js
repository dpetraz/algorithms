
function arrStack(){
    var stack = []          // PRIVATE VARIABLE TO THIS OBJECT

    this.push = function(val){
        stack[stack.length] = val;
        console.log(stack);
        return this
    }

    this.pop = function(){
        var popped = stack[stack.length - 1];
        stack.length -=1;
        return popped;
    }

    this.top = function(){
        return stack[stack.length - 1]
    }

    this.contains = function(val){
        for (var idx = 0; idx < stack.length; idx++){
            if (val == stack[idx]){
                return true;
            }
                return false;
        }
    }

    this.isEmpty = function(){
        if (stack.length == 0){
            return true;
        }
            return false;
    }

    this.showStack = function(){

    }

    this.size = function(){
        var count = 0
        var sniff = this.head
        while (sniff){
            count++
        }
        return sniff;
    }
}

var myStack = new arrStack()

// console.log(myStack);

// myStack.push(5).push({"name": "bob","age": 30}).push(10).push(15)
//
// var topitem = myStack.pop()
// console.log(topitem);
//
// console.log(myStack.contains(56));
// console.log(myStack.isEmpty());
// console.log(myStack.size());

myStack.push(1).push(2).push(3).push(4).push(1).push(2).push(3).push(4)
console.log(myStack);

// GO THROUGH STACK
// QUEUE VALUES

//slQueue uses a singly linked list
function node(value) {                      // node constructor
    this.val = value
    this.next = null
}

function slQueue() {
    var head = null
    var tail = null

    // enqueue method
    this.enqueue = function(val){
        var newNode = new node(val)         // create a new node to hold the passed value

        if (head == null){                  // if the head is null...
            head = newNode                  // then set the head as our new node
            tail = newNode                  // also set the tail as our new node
        }

        else{                               // otherwise if the head exists
            tail.next = newNode             // point the current tail (tail.next) to our new node
            tail = tail.next                // now point the tail to the
        }
        return this                         // must return the slQueue() function back in order to be utilized
    }

    this.dequeue = function(){              // remove and return value at the front of the queue
        var temp = head                     // create var temp and set it to value of head
        head = head.next
        temp.next = null;                   // optional technique to free up memory
        return temp.val                     // return the value of our variable 'temp'
    }
}

function copy(stack){
    var tempQueue = new slQueue()
    var newStack = new arrStack()
    while (stack.size()) {
        newStack.push(stack.pop())      // FIRST: CREATE A NEW STACK WITH SAME VALUES FROM ORIGINAL STACK (BUT IN REVERSE ORDER)
    }                                   // SINCE STACKS ARE FIFO, THE NEW STACK IS IN REVERSE ORDER
    while (newStack.size()){
        tempQueue.enqueue(newStack.pop())   // SECOND: QUEUE THE VALUES OF THE NEW STACK
    }
    newStack.showStack();
    while(tempQueue.size()){
        var temp = tempQ.dequeue()      // THIRD: DEQUEUE VALUES OF THE NEW STACK LOCATED IN OUR LIST
        newStack.push(temp)             // FOURTH: PUSH THE VALUES RELEASED DURING DEQUEUE INTO THE ORIGINAL STACK (IN CORRECT ORDER)
        stack.push(temp)                // FIFTH: ALSO PUSH THE VALUES RELEASED DURING QUEUE INTO NEW STACK (IN CORRECT ORDER)
    }
    return newStack;
}

var stack2 = copy(myStack)
stack2.showStack()
myStack.showStack()
