// LIST CONSTRUCTOR CREATES A LIST WITH A HEAD VARIABLE INITIALLY SET TO NULL
function slList(){
    this.head = null;
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
console.log(mylist)

addToBack(mylist,new node(10))
console.log(mylist);


// THE FRONT OF THE LIST IS THE FIRST NODE, list.head
function addToFront(list,node){
    node.next = list.head;
    list.head = node;
    return
}

addToFront(mylist,new node(15));
console.log(mylist);


slList.prototype.removeFromFront = function() {
    if (!this.head){
        console.log("Your list is empty");
        return false;
    }
    console.log("this.head is", this.head);
    var pointer = this.head;    //allows us to traverse the list
    this.head = this.head.next;
    pointer.next = null;
    console.log("this is the removed", pointer);
    return pointer;

}

// var removed = mylist.removeFromFront();
// console.log(removed);
// console.log(mylist);

addToFront(mylist, new node(20))
console.log(mylist);


function sectonToLast(node){
    var counter = 0;
    var pointer = node;
    while(node.net){
        counter++;
        pointer = pointer.next;
    }
    pointer = node;
    while (counter > 1){
        counter--;
        pointer = pointer.next;
    }
    return pointer.value;
}

function thirdToLast(node){
    var ponter = node.next.next;
    while (pointer.next){
        pointer = poiner.next;
        node = node.next;
    }
    return node.value;
}

// WHAT IF LIST ISN'T LONG ENOUGH?

function thirdToLast(node){
    if (node.next && node.next.next){
        var ponter = node.next.next;
        while (pointer.next){
            pointer = poiner.next;
            node = node.next;
        }
        return node.value;
    }
    else{
        return "list not long enough";
    }
}
