$(document).ready(function () {

  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a "));

  $(".saveBtn").on("click", function () {

    var currentTime = $(this).parent().attr("id");
    var userInput = $(this).siblins(".description").val();

    localStorage.setItem(currentTime, userInput);
  })
  $("hour-9 .description").val(localStorage.getItem("hour-9"));
  $("hour-10 .description").val(localStorage.getItem("hour-10"));
  $("hour-11 .description").val(localStorage.getItem("hour-11"));
  $("hour-12 .description").val(localStorage.getItem("hour-12"));
  $("hour-13 .description").val(localStorage.getItem("hour-13"));
  $("hour-14 .description").val(localStorage.getItem("hour-14"));
  $("hour-15 .description").val(localStorage.getItem("hour-15"));
  $("hour-16 .description").val(localStorage.getItem("hour-16"));
  $("hour-17 .description").val(localStorage.getItem("hour-17"));

  function timeTracker() {

    var currentTime = moment().hour();

$(".time-block").each(function() {
  var blockTime = parseInt($(this).attr("id").split("hour")[1]);

  if (blockTime < currentTime) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
  } else if (blockTime === currentTime) {
    $(this).addClass("present");
    $(this).removeClass("past");
    $(this).removeClass("future");
  } else {
    $(this).addClass("future");
    $(this).removeClass("present");
    $(this).removeClass("past");
  }
    

  })
}
timeTracker();
  }

})




// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.
// var currentDay = $("#currentDay");
// var userInput = document.querySelector("#userInput");
// var saveBtn = document.querySelector("#saveBtn");


// function displayDay() {
//   var rightNow = dayjs().format('MMM DD, YYYY');
//   currentDay.text(rightNow);
// }

// saveBtn.addEventListener("click", function() {
  

//   var userInput = document.querySelector("#userInput").value;

//   if (userInput === "") {
//     displayMessage("Entry is blank");
//   } else {
//     displayMessage("Entry added!");
//   }

//   localStorage.setItem("userInput", userInput);
// });
// function saveUserInput() {
  
  
//   };
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.


// displayDay();
// saveUserInput();