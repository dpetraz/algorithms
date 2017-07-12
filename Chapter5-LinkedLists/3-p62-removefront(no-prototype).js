// LIST CONSTRUCTOR CREATES A LIST WITH A HEAD VARIABLE INITIALLY SET TO NULL
function slList(){
    this.head = null;

    this.removeFromFront = function() {
        if (!this.head){
            console.log("Your list is empty");
            return false;
        }
        console.log("this.head is", this.head);
        var pointer = this.head;    //allows us to traverse the list
        this.head = this.head.next;
        pointer.next = null;
        // console.log("this is the removed", pointer);
        return pointer;
    }

    this.insertAfter = function(depth, val){
        var current = this.head;
        var newNode = new node(val)
        if (this.head){
            var count = 1
        }
        else {
            this.head = new node(val)
            return
        }
        while (count != depth && current.next){
            current = current.next;
            count ++
        }
        console.log(current);
        newNode.next = current.next;
        current.next = newNode;
        console.log(current);
        return
    }

    this.iterate = function(){
        var current = this.head;
        while (current){
            console.log("current value is:", current.nodeValue);
            current = current.next;
        }
        return
    }
}

// USE THE LIST CONSTRUCTOR TO CREATE A NEW LIST AND ASSIGN IT TO VARIABLE mylist
var mylist = new slList()

// NODE CONSTRUCTOR CREATES A NEW NODE OBJECT SOMEWHERE IN MEMORY
function node(value){
    this.nodeValue = value;
    this.next = null;
}

// USE THE NODE CONSTRUCTOR TO CREATE A NEW NODE AND ASSIGN IT
var node1 = new node(5)


// AND NOW LINK OUR NEW NODE TO OUR NEW LIST
function addToBack(list, node){
    if (!list.head){
        list.head = node;
        return
    }
    var pointer = list.head;

    while (pointer.next){
        pointer = pointer.next;
    }
    pointer.next = node;
    return
}

addToBack(mylist,node1);

addToBack(mylist,new node(15))

console.log(mylist);

// THE FRONT OF THE LIST IS THE FIRST NODE, list.head
function addToFront(list,node){
    node.next = list.head;
    list.head = node;
    return
}

addToFront(mylist, new node(10));

addToFront(mylist, new node(5));

// console.log(mylist.head);
// console.log(mylist.removeFromFront());

mylist.insertAfter(30,30);
mylist.iterate();
console.log(mylist);
