$(document).ready(function () {

  $("#currentDay").text(moment().format("MMMM DD YYYY"));

  $(".saveBtn").on("click", function () {

    var currentTime = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();

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
  $("hour-18 .description").val(localStorage.getItem("hour-18"));

  function timeTracker() {

    var currentTime = moment().hour();

    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
      console.log(currentTime)

      if (blockTime < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (blockTime === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }


    })
  }
  timeTracker();


})
