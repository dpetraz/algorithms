// LIST CONSTRUCTOR CREATES A LIST WITH A HEAD VARIABLE INITIALLY SET TO NULL
function slList(){
    this.head = null;
}

// USE THE LIST CONSTRUCTOR TO CREATE A NEW LIST AND ASSIGN IT TO VARIABLE mylist
var mylist = new slList()

// NODE CONSTRUCTOR CREATES A NEW NODE OBJECT SOMEWHERE IN MEMORY
function node(value){
    this.nodeValue = value;             // or this.value = value
    this.next = null;
}

// add the first node here to begin
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

addToBack(mylist, node1)
addToBack(mylist, new node(20));

// NOW ADD ADDITIONAL NODES TO THE LIST
function addToFront(list,node){
    node.next = list.head;
    list.head = node;
    return
}


addToFront(mylist,new node(10));
// console.log(mylist);

addToFront(mylist,new node(5))

console.log(mylist);


slList.prototype.contains = function(val){
    var pointer = this.head;
    while (pointer){
        if (pointer.value === val){
            return pointer;
        }
        pointer = pointer.next;
    }
    return false;
}

console.log(mylist.contains(5));
