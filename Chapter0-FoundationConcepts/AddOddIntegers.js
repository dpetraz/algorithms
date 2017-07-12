var counter = 0;

for (var idx = -300000; idx < 300001; idx++){
    if (idx % 2 > 0){
        counter += idx;
    }
}
console.log(counter);
