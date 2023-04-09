// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  var todaysDate = dayjs().format('dddd, MMMM D');
  $("#currentDay").text(todaysDate); //used jQuery and dayjs to display todays date

  $('.saveBtn').on('click', function(){
    var timeBlockSave = $(this).parent().attr('id');
    var content = $(this).siblings("textarea").val();
    localStorage.setItem(timeBlockSave, JSON.stringify(content));
  }) // used jQuery to assign each button to is respective time block

  
  $('.time-block').each(function(){
    var currentTime = dayjs().format('h');
    var timeBlock = $(this).attr('id');
    if (currentTime > timeBlock) {$(this).addClass('past')}
    if (currentTime === timeBlock) {$(this).addClass('present')}
    if (currentTime < timeBlock) {$(this).addClass('future')}
  }) // used jQuery to select timeblock divs and assign timeblock classes
});











    // DONE: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    

    // DONE: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    

    // DONE: Add code to display the current date in the header of the page.
