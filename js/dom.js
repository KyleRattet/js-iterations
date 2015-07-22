/*
Hints for the first problem:
  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page
*/

////Variables Assigned to DOM locations
//answer -- DIV where the answers are inserted
var answers = document.getElementById('answer');

//options list to access prices
var options = document.getElementsByTagName('option');

//sum all button
var sumAllButton = document.getElementById('sum-all');



//Event handlder functions to make buttons do things

//1. sum all button
///first line ==>> where to listen from, 2nd line ==> what to do when clicked and where to insert it
sumAllButton.addEventListener("click", function (){
  answers.innerHTML = sum(options);
  });
