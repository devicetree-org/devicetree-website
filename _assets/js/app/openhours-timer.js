$(document).ready(function(){

    //Open Hours CountDown using FlipClick http://flipclockjs.com/

    function nextDay(x){
        var now = new Date();
        now.setDate(now.getDate() + (x+(7-now.getDay())) % 7);
        return now;
    }

    var nextOpenHours = nextDay(4);

    //The date of the open hours
    var openhours  = new Date(Date.UTC(2017, 07,  24, 16, 0, 0));
    var now   = new Date();
    var diff  = openhours.getTime()/1000 - now.getTime()/1000;

    var date2  = new Date(Date.UTC(1996, nextOpenHours.getMonth(),  nextOpenHours.getDate(), 16, 0, 0));
    var now2  = new Date();
    var diff2  = date2.getTime()/1000 - now2.getTime()/1000;

    var clock = $('.open-hours-clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });

    var clock2 = $('.expired-clock').FlipClock(diff2, {
        clockFace: 'DailyCounter',
        countdown: true
    });

});
