// NOT USING STRINGS, DISPLAY LEFT MOST NON-ZERO DIGIT OF A NUMBER
// MUST USE WHILE LOOP

function mostSignificantDigit(numberIn){

    if (numberIn > 10){
        while (numberIn >= 10){
            numberIn = numberIn / 10;
        };
    }
    else if (numberIn < 1 && numberIn > 0) {
        while(numberIn < 1) {
            numberIn = numberIn * 10;
        };
    }
    else if (numberIn < 0 && numberIn > -1){
        numberIn = Math.abs(numberIn);
        while(numberIn < 1){
        numberIn = (numberIn * 10);
        };
    }
    else {
        numberIn = Math.abs(numberIn);
        while (numberIn >= 10){
            numberIn = numberIn / 10;
        };
    };

    return Math.floor(numberIn);
};

console.log(mostSignificantDigit(-0.02192132));
