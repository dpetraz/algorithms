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



function removeFromBack(list){
    if(!list.head){
        return false;
    }
    else if (!list.head.next){  // LIST OBJECT HAS A HEAD KEY, AND THE LIST.HEAD KEY VALUE IS NEXT
        list.head = null;
    }

    var pointer = list.head;
    var prev = null;

    while (pointer.next){
        prev = pointer;
        pointer = pointer.next;
    }
    if (prev){
        prev.next = null;   // THIS INSTRUCTS THAT NOW THERE WILL BE NO PREV.NEXT, THEREFORE WE STOP HOLDING ONTO THIS REFERENCE AND LOST THE VALUE REFERENCE IN OUR LIST (GARBAGE COLLECTED)
    }    
    return
}

removeFromBack(mylist);
console.log(mylist);
