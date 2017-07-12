var array = [29,-4,-1,43,-10,-2,94];

function oddPolice(arr){

    var oddcount = 0;
    var evencount = 0;
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] % 2 != 0){
            oddcount = 0;
            evencount++;
            if (evencount >= 3){
                console.log("thats odd");
                evencount=0;
            }
        }
        else if (arr[idx] % 2 == 0){
            evencount = 0;
            oddcount++;
            if (oddcount >= 3){
                console.log("even more so!");
                oddcount=0;
            }
        }
    }
}

// oddPolice(array);
oddPolice([19,3,7,8,9,-2,6,8,9,1,0,2,-2,-6,8]);

// countPositives([1,-2,3]);
