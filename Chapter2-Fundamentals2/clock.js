function clock(seconds){
    var hour = Math.round(seconds / 3600 / 12 * 360);
    var min = Math.round(seconds % 3600 / 10);
    var sec = Math.round(seconds % 60 * 6);
    console.log(hour + " degrees hour, " + min + " degrees min, " + sec + " degrees sec");
}

clock(40000);
