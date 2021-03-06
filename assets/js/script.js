console.log("hello world!");

// show today's date
var today = moment().format("dddd, MMMM Do YYYY");
console.log(today);
var todayElement = document.getElementById('currentDay');
todayElement.textContent = today;

// enter and save text in timeblock
var events = [];

var loadEvents = function () {
    var savedEvents = localStorage.getItem("events");
    if (!savedEvents) {
        return false;
    }
    savedEvents = JSON.parse(savedEvents);
    console.log(savedEvents)
    for (var i = 0; i < savedEvents.length; i++) {
        var eventTime = savedEvents[i].time;
        var eventText = savedEvents[i].text;
        console.log(eventTime);
        console.log(eventText);
        var eventBlock = document.getElementById(eventTime);
        eventBlock.innerHTML = eventText;
    }
}

$(".time-block").on("click", "button", function () {
    var currentText = $(this).siblings("textarea").val().trim();
    var timeBlock = $(this).siblings("textarea").attr("id");
    events.push({
        text: currentText,
        time: timeBlock
    })
    console.log(events);
    saveEvents();
});

var saveEvents = function () {
    localStorage.setItem("events", JSON.stringify(events));
}

// set timeblock color
var currentHour = moment().format("H")
console.log(currentHour);

if (currentHour >= 10) {
    $(".9am").addClass("past");
} else if (currentHour < 9) {
    $(".9am").addClass("future");
} else {
    $(".9am").addClass("present");
}

if (currentHour >= 11) {
    $(".10am").addClass("past");
} else if (currentHour < 10) {
    $(".10am").addClass("future");
} else {
    $(".10am").addClass("present");
}

if (currentHour >= 12) {
    $(".11am").addClass("past");
} else if (currentHour < 11) {
    $(".11am").addClass("future");
} else {
    $(".11am").addClass("present");
}

if (currentHour >= 13) {
    $(".12pm").addClass("past");
} else if (currentHour < 12) {
    $(".12pm").addClass("future");
} else {
    $(".12pm").addClass("present");
}

if (currentHour >= 14) {
    $(".1pm").addClass("past");
} else if (currentHour < 13) {
    $(".1pm").addClass("future");
} else {
    $(".1pm").addClass("present");
}

if (currentHour >= 15) {
    $(".2pm").addClass("past");
} else if (currentHour < 14) {
    $(".2pm").addClass("future");
} else {
    $(".2pm").addClass("present");
}

if (currentHour >= 16) {
    $(".3pm").addClass("past");
} else if (currentHour < 15) {
    $(".3pm").addClass("future");
} else {
    $(".3pm").addClass("present");
}

if (currentHour >= 17) {
    $(".4pm").addClass("past");
} else if (currentHour < 16) {
    $(".4pm").addClass("future");
} else {
    $(".4pm").addClass("present");
}

if (currentHour >= 18) {
    $(".5pm").addClass("past");
} else if (currentHour < 17) {
    $(".5pm").addClass("future");
} else {
    $(".5pm").addClass("present");
}

loadEvents();