function NodeConstructor(value, priority){
    this.value = value;
    this.next = null;
    this.priority = priority;
}

function PriorityQueue(){
    this.head = null;

    this.isEmpty = function(){
        return (!this.head);
    }

    this.push = function(value, priority){
        if (this.isEmpty()){
            this.head = new NodeConstructor(value, priority);
            return this;
        }
        var current = this.head;
        var previous;
        while (current && current.priority <= priority){
            previous = current;
            current = current.next;
        }
        if (previous) {
            var temp = previous.next;
            previous.next = new NodeConstructor(value, priority);
            previous.next.next = temp;
        }
        return this;
    }

    this.remove = function(){
        if (this.isEmpty()){
            return null;
        }
        var current = this.head;
        this.head = this.head.next;
        return current;
    }
}

function Node(val) {
    this.value = val;
    this.connections = [];
    this.addConnection = function(node, distance){
        this.connections.push({node: node, distance: distance});
    }
}

function Graph() {
    this.nodes = [];
}

Graph.prototype.addNodes = function() {
    // console.log(arguments);
    for (let index in arguments){ //ARGUMENTS --> REPRESENTS ALL ARGUMENTS PASSED INTO A FUNCTION
        // console.log(arguments[index]);
        this.nodes.push(arguments[index]);
    }
}

// Graph.prototype.isConnectedStack = function(startNode, endNode) {
//     var tempStack = [];
//     var visited = [startNode];
//     for (var idx = 0; idx < startNode.connections.length; idx++){
//         tempStack.push(startNode.connections[idx]);
//         if (startNode.connections[idx] == endNode){
//             return true;
//         }
//     }
//     while (tempStack.length){
//         var currentNode = tempStack.pop();
//         visited.push(currentNode);
//         if (currentNode == endNode){
//             return true;
//         }
//         for (var jdx = 0; jdx < currentNode.connections.length; jdx++){
//             if (!visited.includes(currentNode.connections[jdx])){
//                 tempStack.push(currentNode.connections[jdx]);
//             }
//         }
//     }
//     return false;
// }

Graph.prototype.isConnectedQueue = function(startNode, endNode) {
    var tempStack = [];
    var visited = [startNode];
        // console.log('startNode', startNode);
    for (var idx = 0; idx < startNode.connections.length; idx++){
        tempStack.push(startNode.connections[idx]);
        if (startNode.connections[idx] == endNode){
            return true;
        }
    }
    while (tempStack.length){
        var currentObject = tempStack[0];
        // console.log("currentObject", currentObject);
        tempStack.splice(0,1);
        visited.push(currentObject);
        if (currentObject.node == endNode){
            return true;
        }
        // console.log('currentObject.node', currentObject.node);
        for (var jdx = 0; jdx < currentObject.node.connections.length; jdx++){
            if (!visited.includes(currentObject.node.connections[jdx])){
                tempStack.push(currentObject.node.connections[jdx]);
            }
        }
    }
    return false;
}

var newGraph = new Graph();

var sea = new Node('SEA');
var pit = new Node('PIT');
var phx = new Node('PHX');
var mdw = new Node('MDW');
var pdx = new Node('PDX');
var mfo = new Node('MFO');

sea.addConnection(pit, 3000);
pit.addConnection(phx, 2300);
phx.addConnection(pit, 2300);
sea.addConnection(pdx, 250);
pdx.addConnection(mdw, 1900);
mdw.addConnection(mfo, 1700);
mfo.addConnection(phx, 1600);
mdw.addConnection(pit, 800);

// console.log(sea);

// newGraph.addNodes(phx, pit, sea, mdw, pdx, mfo);
// console.log(newGraph.isConnectedStack(sea, mfo));
// console.log(newGraph.isConnectedQueue(sea, pit));

// ADD DISTANCES TO ALL CONNECTIONS THEN FIND SHORTEST PATH BETWEEN THE TWO
// NEW CONNECTION WILL GET PUSHED IN LIKE THIS {node: Node, distance: 123}

Graph.prototype.shortestRoute = function(startNode, endNode) {
    if (this.isConnectedQueue(startNode, endNode)){
        var distanceTraveled = 0;
        var placesChecked = [];
        var queue = new PriorityQueue();

        for (var idx = 0; idx < startNode.connections.length; idx++){
            queue.push(startNode.connections[idx].node, startNode.connections[idx].distance);
        }

        while (!queue.isEmpty()){
            var currentObject = queue.remove();
            placesChecked.push(currentObject);
            distanceTraveled += currentObject.priority;
            if (endNode == currentObject.value){
                return distanceTraveled;
            }
            else {
                if (currentObject.value.connections.length > 1){
                    if (currentObject.connections is already in our queiue){
                        skip it and continue looking through
                    }
                    queue.push(currentObject.connections)
                }


            }
        }

        console.log('currentObject is', currentObject);
        // placesChecked.push()

        // currentDistance += (currentObject + distance)


        // while (queue){
        //     var currentObject = queue.pop();
        //
        // }
        // start with seattle, add all connections and distances for seattle
        // pop from priority queue the shortest distance
        // now enque all of the connections from this shortest distance location's connections


        // add all possible distances from location 1 to other locations
        // if the lowest total distance doesnt connect us, pop from priority queue
        // review the next total distance. keep track of all of these additional total distances,
        // review the lowest, check if connect, pop, repeat
    }
    // return false;
}
newGraph.shortestRoute(sea,pit);
