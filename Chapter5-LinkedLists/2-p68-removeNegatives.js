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
            var count = 1;
        }
        else {
            this.head = new node(val);
            return;
        }
        while (count != depth && current.next){
            current = current.next;
            count ++;
        }
        console.log(current);
        newNode.next = current.next;
        current.next = newNode;
        console.log(current);
        return;
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
    this.nodeValue = value;             // or this.value = value can be used (just update references)
    this.next = null;
}

// USE THE NODE CONSTRUCTOR TO CREATE A NEW NODE AND ASSIGN IT
var node1 = new node(15)


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

addToBack(mylist,new node(20))

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

mylist.insertAfter(10,25);
mylist.iterate();





function removeNegatives(node){
    var pointer = node;
    var pointer2 = node;
    while (node){
        if (node.nodeValue < 0){
            node = node.next;
        }
        else{
            var temp = node.nodeValue;
            node.nodeValue = pointer.nodeValue;
            pointer.nodeValue = temp;
            pointer = pointer.next;
            node = node.next;
        }
    }
    node = null;
    while (pointer2.next != pointer){
        pointer2 = pointer2.next;
    }
    pointer2.next = null;
}

console.log(removeNegatives(new node(2)));
