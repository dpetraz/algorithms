// Binary Search Tree Node Class
function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

// Binary Search Tree Class
function BST() {
    this.root = null;
}

// PAGE 120 NO. 1 - ADD NEW VALUE TO THE TREE

// Add a new node to the BST
BST.prototype.Add = function(val) {
    var newNode = new Node(val);
    if (!this.root) {
        this.root = newNode;
    }
    else {
        var current = this.root;
        while(current){
            if(val < current.value){
                if(!current.left) {
                    current.left = newNode;
                    return true;
                }
                current = current.left;
            }
            else {
                if (!current.right) {
                    current.right = newNode;
                    return true;
                }
                current = current.right;
            }
        }
    }
    return false;
}

// var tree1 = new BST();
// tree1.Add(5)
// tree1.Add(10)
// tree1.Add(15)
// tree1.Add(2)
// console.log("here's the tree:");
// console.log(tree1);



// *****************


// SIDENOTE - "THIS" IS A POINTER TO THE BST POJECT

// PAGE 120 NO. 2 - CONTAINS/SEARCH FUNCTION

BST.prototype.Search = function(val){
    if (!this.root){
        return false;
    }

    var current = this.root;

    while (current){
        if (val == current.value){
            current = current.right;
            return true;
        }
        else if (val > current.value){
            current = current.right;
        }
        else {
            current = current.left;
        }
    }
    return false;
}


var tree = new BST();
var valArr = [50,75,25,34,6,23,1,494,23,1,76,82,23,5,87]

// this is a tricky ES6 JS method to create our tree with an array
valArr.forEach((val) => {
    tree.Add(val);
});

// console.log(tree.Search(75));
// console.log(tree.Search(25));
// console.log(tree.Search(8));


//*******************

// PAGE 120 NO. 3 - MIN

BST.prototype.MinVal = function(){
    if (!this.root){
        return null;
    }
    var current = this.root;

    while (current.left) {
        current = current.left;
    }
    return current.value;
}

// console.log(tree.MinVal());

//*******************


// PAGE 120 NO. 4 - MIN

BST.prototype.MaxVal = function(){
    if (!this.root){
        return null;
    }
    var current = this.root;

    while (current.right) {
        current = current.right;
    }
    return current.value;
}

// console.log(tree.MaxVal());


//*******************

// PAGE 120 NO. 6 - IS EMPTY

BST.prototype.Empty = function () {
    if (!this.root){
        return true;
    }
    return false;
};

BST.prototype.Empty2 = function () {
    return (!this.root);
};

// console.log(tree.Empty());
// console.log(tree.Empty2());

//*******************


// PAGE 120 NO. 5 - SIZE (NUMBER OF NODES/VALUES CONTAINED IN THE TREE)

BST.prototype.Size = function (node = this.root) {
    if (!node){
        return 0;
    }
    if(!node.left && !node.right){
        return 1;
    }
    else {
        return (BST.prototype.Size(node.left) + BST.prototype.Size(node.right) + 1)
    }
}

console.log(tree.Size());

BST.prototype.Size2 = function () {
    // place root object into an array
    // using a STACK (QUEUE also works)
    // use an array and treat it like a stack
    // pushing an array acts like a STACK
    // end of the array acts like the head/top of the stack
    // pop the root (increment) and put in its children
    // pop one child (increment) and put in ITS children
    // add to array the next left and right branch
    // count the root
    // now pull the left out (it's an object) and count by 1
    // while we have 3 open, add its children to the array
    // evaluate and count for the children
}
