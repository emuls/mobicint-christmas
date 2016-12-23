window.onload = function initializecountdown (){
    var christmascontainer = document.getElementById('countdowncontainer'); // reference container

    var currentyear = new Date().getFullYear();
    //dynamically get this Christmas' year value. If Christmas already passed, then year=current year+1
    var christmasyear = (new Date().getMonth() >= 11 && new Date().getDate() > 25) ? currentyear + 1 : currentyear;

    var christmascountdown = new cdtime("December 25, " + christmasyear + " 00:00:00");

    christmascountdown.oncountdown = function (ms) {
        if (ms <= 0) { // if time's up
            christmascontainer.innerHTML = "<b>Christmas is Upon Us!</b>"; // do something
        }
        else {
            var timeleft = cdtime.formatDuration(ms, "days"); // format time using formatDuration(timeleftms, "baseunit") function
            christmascontainer.innerHTML = "<span class='lcdstyle'>" + timeleft.days + " <sup>days</sup> " + timeleft.hours + " <sup>hours</sup> " + timeleft.minutes + " <sup>minutes</sup> " + timeleft.seconds + " <sup>seconds</sup></span> left until this Christmas"
        }
    };
    christmascountdown.start();
};