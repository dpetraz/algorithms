my_object = {"name": "Zaphod", "charm": "high", "morals": "dicey"};

function invertHash (object){
    var newHash = {}

    for (var key in object){
        newHash[object[key]] = key;
    }
    return newHash;
}

console.log(invertHash(my_object));
// console.log(newHash);

// using for loop provides...
// in arrays it gives the index
// in objects it gives the key

// for in loop (key in object)
// create new object from keys and val
