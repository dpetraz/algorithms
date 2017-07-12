function noSpaces(string){
   var counter = 0
   for (var idx = 0; idx < string.length; idx++){
      if (string[idx] !== " "){
         counter++
      }
   }
   console.log("Number of non-space characters: " + counter)
   return counter;
  }
noSpaces("hello ladies and gentlemen");
