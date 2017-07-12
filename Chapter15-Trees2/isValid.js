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

// BST.prototype.traverse = function(node){
//     if (node === undefined){
//         node = this.root;
//     }
//     if (node === null){
//         console.log("found a null node, breaking out");
//         return null;
//     }
//     if (node.left){
//         console.log("going left");
//         this.traverse(node.left);
//     }
//     if (node.right){
//         console.log("going right");
//         this.traverse(node.right);
//     }
//     console.log("breaking out");
// }

var tree = new BST();

tree.add(3).add(5).add(7).add(2);
// tree.root.right.right.value = -7;

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

tree.isValid();
console.log(tree.isValid());
