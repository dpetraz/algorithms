var inTemp = 77;
var inUnits = "F";

function tempConvert(temp, units){
    if (units == "C"){
        var outTemp = (((9/5)*temp) + 32);
        console.log(temp + "C is equal to " + outTemp + "F");
    }
    if (units == "F"){
        var outTemp = ((temp - 32)*5/9);
        console.log(temp + "F is equal to " + outTemp + "C");
    }
}

tempConvert(inTemp,inUnits);
