console.log("hello world!");

// show today's date
var today = moment().format("dddd, MMMM Do YYYY");
console.log(today);
var todayElement = document.getElementById('currentDay');
console.log(todayElement);
todayElement.textContent = today;

// set timeclock color
if (moment().isAfter(10, 'hour')) {
    $(".9am").addClass("past");
} else if (moment().isSameOrBefore(9, 'hour')) {
    $(".9am").addClass("future");
} else {
    $(".9am").addClass("present");
}

if (moment().isAfter(11, 'hour')) {
    $(".10am").addClass("past");
} else if (moment().isSameOrBefore(10, 'hour')) {
    $(".10am").addClass("future");
} else {
    $(".10am").addClass("present");
}

if (moment().isAfter(12, 'hour')) {
    $(".11am").addClass("past");
} else if (moment().isSameOrBefore(11, 'hour')) {
    $(".11am").addClass("future");
} else {
    $(".11am").addClass("present");
}

if (moment().isAfter(13, 'hour')) {
    $(".12pm").addClass("past");
} else if (moment().isSameOrBefore(12, 'hour')) {
    $(".12pm").addClass("future");
} else {
    $(".12pm").addClass("present");
}

if (moment().isAfter(14, 'hour')) {
    $(".1pm").addClass("past");
} else if (moment().isSameOrBefore(13, 'hour')) {
    $(".1pm").addClass("future");
} else {
    $(".1pm").addClass("present");
}

if (moment().isAfter(15, 'hour')) {
    $(".2pm").addClass("past");
} else if (moment().isSameOrBefore(14, 'hour')) {
    $(".2pm").addClass("future");
} else {
    $(".2pm").addClass("present");
}


if (moment().isAfter(16, 'hour')) {
    $(".3pm").addClass("past");
} else if (moment().isSameOrBefore(15, 'hour')) {
    $(".3pm").addClass("future");
} else {
    $(".3pm").addClass("present");
}


if (moment().isAfter(17, 'hour')) {
    $(".4pm").addClass("past");
} else if (moment().isSameOrBefore(16, 'hour')) {
    $(".4pm").addClass("future");
} else {
    $(".4pm").addClass("present");
}


if (moment().isAfter(18, 'hour')) {
    $(".5pm").addClass("past");
} else if (moment().isSameOrBefore(17, 'hour')) {
    $(".5pm").addClass("future");
} else {
    $(".5pm").addClass("present");
}
