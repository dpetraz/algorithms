function MinHeap(){
    this.heap = [null];

    this.size = function(){
        return this.heap.length - 1;
    }

    this.contains = function(value){
        for (var idx = 1; idx < this.heap.length; idx++){
            if (this.heap[idx] == value){
                return true;
            }
        }
        return false;
    }

    this.isEmpty = function(){
        if (!this.size()){
            return true;
        }
        return false;
    }

    this.top = function(){
        return this.heap[1];
    }

    this.insert = function(value){
        this.heap.push(value);
        if (this.heap.length == 1){
            return this;
        }
        var newValIdx = this.heap.length - 1;
        var parent = Math.floor(newValIdx/2);
        while (this.heap[newValIdx] < this.heap[parent]){
            this.heap[newValIdx] = this.heap[parent];
            this.heap[parent] = value;
            newValIdx = parent;
            parent = Math.floor(newValIdx/2);
        }
        // console.log(this.heap);
        return this;
    }

    this.extract = function(){
        if (this.isEmpty()){
            return null;
        }
        if (this.size() == 1){
            return this.heap.pop();
        }
        var minValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        var lastVal = this.heap[1];
        var lastValIdx = 1;

        this.repairDown(lastValIdx);
        return minValue;
    }

    this.repairDown = function(index){
        var parent = this.heap[index];

        while(this.heap[index] > this.heap[index * 2] || this.heap[index] > this.heap[index * 2 + 1]){
            console.log("second child", this.heap[index * 2 + 1]);
            if (this.heap[index * 2] > this.heap[index * 2 + 1]){
                console.log("reached first condition");
                var swap = this.heap[index * 2 + 1];
                var swapIdx = index * 2 + 1;
            }
            else {
                console.log("reached second condition");
                var swap = this.heap[index * 2];
                var swapIdx = index * 2;
            }
                this.heap[index] = swap;
                this.heap[swapIdx] = parent;
                index = swapIdx;
        }
    }

    this.heapify = function(array){
        this.heap = this.heap.concat(array);

        var parent = Math.floor(this.heap.length/2);
        while (parent){
            console.log("parent",parent);
            this.repairDown(parent);
            parent = parent - 1;
            console.log(this.heap);
        }
        return this;
    }

}


function repairDown(array, index, limit){
    var parent = array[index];
    while(array[index] > array[index * 2] || array[index] > array[index * 2 + 1]){
        // console.log("second child", array[index * 2 + 1]);
        if (array[index * 2] > array[index * 2 + 1]){
            // console.log("reached first condition");
            var swap = array[index * 2 + 1];
            var swapIdx = index * 2 + 1;
        }
        else {
            // console.log("reached second condition");
            var swap = array[index * 2];
            var swapIdx = index * 2;
        }
            array[index] = swap;
            array[swapIdx] = parent;
            index = swapIdx;
    }
}

function extract(array){
    if (array.length == 1){
        return null;
    }
    if (array.length == 2){
        return array.pop();
    }
    var minValue = array[1];
    array[1] = array.pop();
    var lastVal = array[1];
    var lastValIdx = 1;

    repairDown(array, lastValIdx);
    return minValue;
}

function heapify(array){
    var newArr = [null].concat(array);
    var parent = Math.floor(newArr.length/2);
    while (parent){
        // console.log("parent",parent);
        repairDown(newArr,parent);
        parent = parent - 1;
        // console.log(this.heap);
    }
    return newArr;
}

function heapSort(array){
    var heapArr = heapify(array);
    // console.log(heapArr);
    var newArr = [];
    while (heapArr.length > 1){
        newArr.push(extract(heapArr));
    }
    return newArr;
}

function heapSortInPlace(array){
    array = heapify(array);
    var trackIdx = array.length;
    while (trackIdx > 1){
        // swap
        var temp = array[1];
        array[1] = array[trackIdx - 1];
        array[trackIdx - 1] = temp;
        trackIdx--;
        repairDown(array, 1, trackIdx);
    }

    return array;
}


// var heap = new MinHeap();
// heap.insert(7).insert(2).insert(1).insert(0.5).insert(4).insert(6).insert(0.25);
// console.log(heap.size());
// console.log(heap.contains(1));
// console.log(heap.isEmpty());
// console.log(heap.top());
// console.log(heap.extract());
// console.log(heap);
// var terribleArray = [8,1,4,0.2,7,5,3,9,2,0.5];

var newArray = [5,2,1,18,12,13,0.5]
// console.log(heap.heapify(terribleArray));
// console.log(heapSort(newArray));
console.log(heapSortInPlace(newArray));
