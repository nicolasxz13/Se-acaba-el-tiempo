function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    // your code here
    var hour = Math.floor(time / 3600);
    var minutes = Math.floor((time % 3600) / 60);
    var seconds = time % 60;
    console.log("hour " + hour)
    console.log("minutes " + minutes)
    console.log("seconds " + seconds)

    //deg 0 == 30 min / 6 hour
    //deg 90 == 45 min / 9 hour
    //deg 180 == 0 min / 12 hour
    //deg 270 == 15 min / 3 hour
    //deg 360 == 30 min / 6 hour

    document.getElementById("hour").style.transform = 'rotate(' + (hour * 15) + 'deg);';
    document.getElementById("minutes").style.transform = 'rotate(' + (minutes * 15) + 'deg)';
    document.getElementById("seconds").style.transform = 'rotate(' + (seconds * 15) + 'deg)';
}, 1000);
