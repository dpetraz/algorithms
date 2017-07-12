function isCreditCardValid(arr){
    if ((arr.lengt <13) || (arr.lengt <19)){
    return false
    }
    var lastDigit = arr.pop();
    var sum = 0;
    for (var idx = arr.length - 1; idx >= 0; idx--){
        if (idx % 2 === 0){
            sum += arr[idx];
        }
        else{
            if(arr[idx] * 2 > 9){
                sum += arr[idx] *2 - 9;
            }
            else{
                sum += arr[idx] * 2;
            }
        }
    }
    sum += lastDigit;
    console.log(sum);
    if(sum % 10 === 0){
        console.log("valid");
    }
    else{
        console.log("invalid card");
    }
    console.log(arr);
};






// var array = [4,0,1,2,8,8,8,8,8,8,8,8,1,8,8,1];
var array = [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
return isCreditCardValid(array);
