var counter = 0;

for (var i = 512; i < 4097; i++){
    if (i % 5 == 0) {
    console.log(i);
    counter++;
    }
}
console.log(counter + " multiples of 5 between 512 and 4097");
