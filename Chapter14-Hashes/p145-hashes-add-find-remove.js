function HashMap(capacity) { // CAPACITY = NUMBER OF ITEMS HASH MAP CAN HOLD
    this.capacity = capacity;
    this.table = [];
    this.table.length = capacity;
}

// HASH A STRING USING THIS PROTOTYPE
String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    };
    for (var i = 0; i < this.length; i++){
        char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char; //BITWISE OPERATOR SHIFTS TO LEFT BY FIVE BITS (BY INSERTING FIVE 0s TO RIGHT)
        hash &= hash; //BITWISE & --> IS BIT ON/OFF AND IS OTHER BIT ON
    }
    return hash;
}


// console.log('ab'.hashCode());

var firstHash = new HashMap(3);

// ADDING A NEW VALUE INTO THIS.TABLE (BUCKET)
HashMap.prototype.add = function(key, val){
    var hash = key.hashCode();
    var hashTableIndex = hash % this.table.length;
    if (this.table[hashTableIndex] == undefined){
        this.table[hashTableIndex] = [key, val];
    }
    else if (this.table[hashTableIndex][0] instanceof Array) {
        this.table[hashTableIndex].push([key, val]);
    }
    else {
        this.table[hashTableIndex] = [this.table[hashTableIndex]];
        this.table[hashTableIndex].push([key, val]);
    }
    return this;
}

firstHash.add('pittsburgh1','alwaysCloudy');
firstHash.add('pittsburgh2','alwaysCloudy2');
firstHash.add('pittsburgh3','alwaysCloudy3');
firstHash.add('pittsburgh4','alwaysCloudy4');
firstHash.add('pittsburgh7','alwaysCloudy7');

// console.log(firstHash);
HashMap.prototype.find = function(key){
    var hash = key.hashCode();
    var hashTableIndex = hash % this.table.length;
    if (this.table[hashTableIndex]){
        for (var idx = 0; idx < this.table.length; idx++){
            if (typeof this.table[hashTableIndex][idx] === 'string'){
                console.log("if working");
                if (key === this.table[hashTableIndex][idx]){
                    return this.table[hashTableIndex][idx+1];
                }
            }
            else if (this.table[hashTableIndex][idx] instanceof Array){
                if (key == this.table[hashTableIndex][idx][0]){
                    return this.table[hashTableIndex][idx][1];
                }
            }
        }
    }
    return null;
}
// console.log(firstHash.find('pittsburgh4'));

HashMap.prototype.remove = function(key){
    var hash = key.hashCode();
    var hashTableIndex = hash % this.table.length;
    // console.log(this.table[hashTableIndex]);
    if (this.table[hashTableIndex]){
        for (var idx = 0; idx < this.table.length; idx++){
            // console.log(this.table[hashTableIndex], 'success!');
            if (typeof this.table[hashTableIndex][idx] === 'string'){
                if (key === this.table[hashTableIndex][idx]){
                    this.table[hashTableIndex] = undefined;
                    return this;
                }
            }
            else if (this.table[hashTableIndex][idx] instanceof Array){
                if (key == this.table[hashTableIndex][idx][0]){
                    this.table[hashTableIndex].splice(idx,1);
                    if (this.table[hashTableIndex].length == 1){
                        this.table[hashTableIndex] = this.table[hashTableIndex][0];
                    }
                }
            }
        }
    }
    return this;
}

console.log(firstHash.remove('pittsburgh7').remove('pittsburgh1').remove('pittsburgh4'));
//ratio of key value pairs in hash table to the length of the hash table
