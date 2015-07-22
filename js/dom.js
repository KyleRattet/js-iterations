////Variables Assigned to DOM locations
//answer -- DIV where the answers are inserted
var answers = document.getElementById('answer');

//options list to access prices
var options = document.getElementsByTagName('option');

//sum all button
var sumAllButton = document.getElementById('sum-all');

///count selected button
var countSelectedButton = document.getElementById('count-selected');

//sum selected button
var sumSelectedButton = document.getElementById('sum-selected');

//average all button
var averageAllButton = document.getElementById('average-all');

//average selected button
var averageSelectedButton = document.getElementById('average-selected');



//Event handlder functions to make buttons do things

//1. sum all button
///first line ==>> where to listen from, 2nd line ==> what to do when clicked and where to insert it
sumAllButton.addEventListener("click", function (){
  answers.innerHTML = sum(options);
  });

//2. count selected button
countSelectedButton.addEventListener("click", function () {
  answers.innerHTML = countSelected (options);
});

//3. sum selected button
sumSelectedButton.addEventListener("click", function () {
  answers.innerHTML = sumSelected (options);
});

//4.average all button
averageAllButton.addEventListener("click", function () {
  answers.innerHTML = averagePrices(options);
});

//5. averageSelected button
averageSelectedButton.addEventListener("click", function () {
  answers.innerHTML = averageSelected(options);
});




