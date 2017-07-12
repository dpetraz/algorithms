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
        var temp = previous.next;
        previous.next = new NodeConstructor(value, priority);
        previous.next.next = temp;
        return this;
    }
}

var myFirstQueue = new PriorityQueue();
myFirstQueue.push('first',1).push('second',2).push('third',5).push('fourth',1).push('fifth',2);
console.log(myFirstQueue);
