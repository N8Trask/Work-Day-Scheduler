

$(function () {

  var todaysDate = dayjs().format('dddd, MMMM D');
  $("#currentDay").text(todaysDate); //used jQuery and dayjs to display todays date

  $('.saveBtn').on('click', function(){
    var timeBlockSave = $(this).parent().attr('id');
    var content = $(this).siblings("textarea").val();
    localStorage.setItem(timeBlockSave, JSON.stringify(content));
  }) // used jQuery to assign each button to is respective time block

  
  $('.time-block').each(function(){
    var currentTime = dayjs().format('HH');
    var timeBlock = $(this).attr('id');
    if (currentTime > timeBlock) {$(this).addClass('past')}
    if (currentTime === timeBlock) {$(this).addClass('present')}
    if (currentTime < timeBlock) {$(this).addClass('future')}
    var userInput = $(this).children("textarea");
    var storedDate = JSON.parse(localStorage.getItem(timeBlock));
    userInput.text(storedDate); 
  }); // used jQuery to select timeblock divs and assign timeblock classes with conditional statements. Also used JSON to show saved data in each timeblock
});
