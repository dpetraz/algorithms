function arrStack(){
    var stack = []          // PRIVATE VARIABLE TO THIS OBJECT

    this.push = function(val){
        stack[stack.length] = val;
        console.log(stack);
        return this
    }

    this.pop = function(){
        var popped = stack[stack.length - 1];
        stack.length -=1;
        return popped;
    }

    this.top = function(){
        return stack[stack.length - 1]
    }

    this.contains = function(val){
        for (var idx = 0; idx < stack.length; idx++){
            if (val == stack[idx]){
                return true;
            }
                return false;
        }
    }

    this.isEmpty = function(){
        if (stack.length == 0){
            return true;
        }
            return false;
    }

    this.size = function(){
        return stack.length;
    }

}

var myStack = new arrStack()

// console.log(myStack);

myStack.push(5).push({"name": "bob","age": 30}).push(10).push(15)

var topitem = myStack.pop()
console.log(topitem);

console.log(myStack.contains(56));
console.log(myStack.isEmpty());
console.log(myStack.size());
