var calendar_box = document.getElementById('calendar');
var day_of_the_week = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');

// 요일
for(var i = 0; i < 7; i++) {
    calendar_box.innerHTML += "<div id='day_of_the_week'>" + day_of_the_week[i] + "</div>";
}

// 달력 칸
for(var i = 1; i < 43; i++) {
    calendar_box.innerHTML += "<div class='box' ></div>";
}

// 일
var days = document.getElementsByClassName('box');
for(var i = 1; i < 32; i++) {
    days[i + 5].innerHTML += i;
}
