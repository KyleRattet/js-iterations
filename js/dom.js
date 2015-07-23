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

/////names
//assign variables to get items

//nameAnswers - where the selected names get printed
var nameAnswers = document.getElementById('nameAnswers');

//location of the all the names
var namesList = document.getElementsByTagName('textarea')[0].value;

//print all names button
var printAllNamesButton = document.getElementById('all-names');

//test to print all names button
var finalList = stringToArray(namesList);

printAllNamesButton.addEventListener("click", function () {
  var li = document.createElement('li');
  var ul = document.getElementById('nameAnswers');
  ul.appendChild(li).innerHTML = finalList;
});


///test 2


//iterate through array, then create new li, add index value to that li
// var li = document.createElement('li');
// var ul = document.getElementById('nameAnswers');
// ul.appendChild(li)

function createElement () {
  var namesArrary = stringToArray(namesList);
  for (var i = 0; i < namesArray.length; i++) {
    var li = document.createElement('li');
    var ul = document.getElementById('nameAnswers');
    ul.appendChild(li).innerHTML = stringToArray(namesList)[i] + ;
//   };
// }

//try to add one name in new li
// printAllNamesButton.addEventListener("click", function  () {
//   var li = document.createElement('li');
//   var ul = document.getElementById('nameAnswers');
//   ul.appendChild(li) = namesListArray[0];
// });


// var li = document.createElement('li');
// var ul = document.getElementById('nameAnswers');
// ul.appendChild(li) = namesListArray[0]

// for (var i = 0; i < stringToArray(namesList).length; i++) {
//   var li = document.createElement('li');
//   var ul = document.getElementById('nameAnswers');
//   ul.appendChild(li).innerHTML = stringToArray(namesList)[i];
// };







