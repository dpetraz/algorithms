function isCreditCardValid(arr){
    if (arr.length <13 && arr.length >19){
        return false;
    }
    var lastDigit = arr.pop();

    if(arr.length % 2 !==0){
        var len = arr.length - 2;
    }
    else{
        var len = arr.length -1;
    }
    for (len; len > 0; len-=2){
        if ((arr[len] * 2) > 9){
            arr[len] = (arr[len] * 2) - 9;
        }
        else{
            arr[len]*=2;
        }
    }
    var sum = 0;
    for (var idx = 0; idx < arr.length; idx++){
        sum += arr[idx];
    }
    sum += lastDigit;
    console.log(lastDigit);
    console.log(sum);
    if(sum % 10 === 0){
        console.log("valid");
    }
    else{
        console.log("invalid card");
    }

    console.log(arr);
};


var array = [4,0,1,2,8,8,8,8,8,8,8,8,1,8,8,1];
// var array = [5,1,0,5,1,0,5,1,0,5,1,0,5,1,0,0];
return isCreditCardValid(array);
