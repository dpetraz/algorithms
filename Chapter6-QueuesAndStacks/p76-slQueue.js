

function node(value) {                      // node constructor
    this.val = value                        
    this.next = null
}


//slQueue uses a singly linked list
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

    this.showQueue = function(){            // create an object (showQueue) to show contents of queue...
        var sniff = head                    // (create variable equal to local variable called head)
        while(sniff){                       // ...which we'll accomplish using a while loop - while sniff contains a value
        console.log(sniff.val)              // print the value of the variable (on the first loop this will be head)
        sniff = sniff.next                  // now set variable equal to the next value in the list
        }
    }

    this.front = function() {               // show value at the front of the queue...
        return head.val                     // ...which will always be the at the head (front of the line/queue)
    }

    this.dequeue = function(){              // remove and return value at the front of the queue
        var temp = head                     // create var temp and set it to value of head
        head = head.next
        temp.next = null;                   // optional technique to free up memory
        return temp.val                     // return the value of our variable 'temp'
    }

    this.contains = function(value){
        var sniff = head
        while(sniff){
            if(sniff.val == value){
                return true
            }
        sniff = sniff.next
        }
        return false
    }
}


var myQueue = new slQueue()                 // create a new object, returned from the slQueue() function
myQueue.enqueue(5)                          // add value to our queue
myQueue.enqueue(10)                         // add value to our queue
myQueue.enqueue(15)                         // add value to our queue

console.log("Front is", myQueue.front());   // show front value of queue by calling on the front() function
myQueue.showQueue()                         // show entire queue by calling the showQueue() function

var poppedValue = myQueue.dequeue()         // create new object equal the value returned from function dequeue()
console.log("Removed", poppedValue,"from queue"); // show
myQueue.showQueue()                         // show entire queue by calling the showQueue() function

console.log(myQueue.contains(10));
