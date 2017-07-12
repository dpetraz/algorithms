function stringConcat(){
    newString = "";
    space = " ";
    console.log(arguments);
    for (var count = 0; count < arguments.length; count++){
        if (count != arguments.length - 1){
            newString += arguments[count] + space;
        }
        else {
            newString += arguments[count];
        }
    }
    return newString;
}

str1 = "hello";
str2 = "hi"
str3 = "greetings";


console.log(stringConcat(str1,str2,str3,'hi!'));
