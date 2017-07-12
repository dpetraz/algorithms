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

// THE ROOT IS A VARIABLE THAT'S HOLDING OUR
// TREE IN MEMORY SPACE

// PAGE 120 NO. 1 - add NEW VALUE TO THE TREE

// add a new node to the BST
BST.prototype.add = function(val) {
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
                    return this;
                }
                current = current.left;
            }
            else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    return this;
}

// var tree1 = new BST();
// tree1.add(5)
// tree1.add(10)
// tree1.add(15)
// tree1.add(2)
// console.log("here's the tree:");
// console.log(tree1);



// *****************


// SIDENOTE - "THIS" IS A POINTER TO THE BST POJECT

// PAGE 120 NO. 2 - CONTAINS/SEARCH FUNCTION

BST.prototype.search = function(val){
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
    tree.add(val);
});

// console.log(tree.search(75));
// console.log(tree.search(25));
// console.log(tree.search(8));


//*******************

// PAGE 120 NO. 3 - MIN

BST.prototype.minVal = function(){
    if (!this.root){
        return null;
    }
    var current = this.root;

    while (current.left) {
        current = current.left;
    }
    return current.value;
}

// console.log(tree.minVal());

//*******************


// PAGE 120 NO. 4 - MIN

BST.prototype.maxVal = function(){
    if (!this.root){
        return null;
    }
    var current = this.root;

    while (current.right) {
        current = current.right;
    }
    return current.value;
}

// console.log(tree.maxVal());


//*******************

// PAGE 120 NO. 6 - IS EMPTY

BST.prototype.empty = function () {
    if (!this.root){
        return true;
    }
    return false;
};

BST.prototype.empty2 = function () {
    return (!this.root);
};

// console.log(tree.empty());
// console.log(tree.empty2());

//*******************


// PAGE 120 NO. 5 - SIZE (NUMBER OF NODES/VALUES CONTAINED IN THE TREE)

BST.prototype.size = function (node = this.root) {
    if (!node){
        return 0;
    }
    if(!node.left && !node.right){
        return 1;
    }
    else {
        return (BST.prototype.size(node.left) + BST.prototype.size(node.right) + 1)
    }
}

// console.log(tree.size());

BST.prototype.size2 = function () {
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
//
// console.log(tree.size2());



BST.prototype.height = function (node = this.root) {
    if (!node){
        return 0;
    }
    if(!node.left && !node.right){
        return 1;
    }
    else {
        var left = BST.prototype.height(node.left)
        var right = BST.prototype.height(node.right)
        if (left > right){
            return left + 1;
        }
        else {
            return right + 1;
        }
    }
}

var tree2 = new BST();

tree2.add(4).add(2).add(6).add(100).add(102)

// console.log(tree2.height());

BST.prototype.isBalanced = function (node = this.root) {
    if (!node){
        return true;
    }
    var left = BST.prototype.height(node.left)
    var right = BST.prototype.height(node.right)

    if (Math.abs(right - left) > 1){
        return false;
    }
    else {
        return (BST.prototype.isBalanced(node.left) && BST.prototype.isBalanced(node.right))
    }
}

console.log(tree2.isBalanced());
