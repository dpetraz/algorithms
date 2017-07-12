// Binary Search Tree Node Class
function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.parent = null;
}

// Binary Search Tree Class
function BST() {
    this.root = null;
}

BST.prototype.rotateRight = function (node){
    console.log("rotating right");
    var temp = node.left;
    var parent = node.parent;
    if (node.parent){
        node.parent = node.parent.parent;
        if (parent.parent === null){
            this.root = node;
        }
    }
    node.left = parent;
    parent.parent = node;
    parent.right = temp;
}

BST.prototype.rotateLeft = function (node){
    console.log("rotating left");
    var temp = node.right;
    var parent = node.parent;
    if (node.parent){
        node.parent = node.parent.parent;
        if (parent.parent === null){
            this.root = node;
        }
    }
    node.right = parent;
    parent.parent = node;
    parent.left = temp;
}

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
                    newNode.parent = current;
                    this.checkHeights(newNode);
                    return this;
                }
                current = current.left;
            }
            else {
                if (!current.right) {
                    current.right = newNode;
                    newNode.parent = current;
                    this.checkHeights(newNode);
                    return this;
                }
                current = current.right;
            }
        }
    }
    this.checkHeights(newNode);
    return this;
}

BST.prototype.checkHeights = function (node) {
    var current = node;
    console.log('current', current);
    while (current) {
        var left = this.height(current.left);
        var right = this.height(current.right);
        var diff = right - left;
        if(diff > 1){
            if (this.height(current.right.left) > this.height(current.right.right)){
                this.rotateRight(current.right);
            }
            this.rotateRight(current);
            // return;
        }
        else if(diff < -1){
            if (this.height(current.left.right) > this.height(current.left.left)){
                this.rotateLeft(current.left);
            }
            this.rotateLeft(current);
            // return;
        }
        else {
            console.log("in else statement");
            current = current.parent;
            // console.log("current.parent",current.parent);
        }
    }
};

BST.prototype.isValid = function(node, leftbound, rightbound) {
    if(node === undefined){
        node = this.root;
    }
    var left = true;
    var right = true;

    if(node.value < leftbound || node.value > rightbound){
        return false;
    }
    if(node.right){
        right = this.isValid(node.right, node.value, rightbound)
    }
    if(node.left){
        left = this.isValid(node.left, leftbound, node.value)
    }
    console.log(JSON.stringify(node));
    return left && right;
}

BST.prototype.height = function (node = this.root) {
    // console.log("running height fn...node:", node);
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

// CHECKING IF HEIGHT GREATER THAN ONE (TRUE OR FALSE)
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

var tree = new BST();

tree.add(3).add(5).add(7).add(9)

console.log(tree.root);
// console.log(tree);
//rotate left, logic when to call rotate left or rotate right
