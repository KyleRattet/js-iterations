/*
Hints for the first problem:
  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in
NOTE: use a `for` loop to make this happen.
*/

//will be an array of all the selected values that need to get pushed to sum


////Prices
//1. sumfunction
function sum (options) {
  var total = 0;
  for (var i = 0; i < options.length; i++) {
    total += parseInt(options[i].value);
  };
  return total;
}

//2.  count the selected prices
function countSelected (options){
  var count = 0;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected === true) {
      count ++
    }
  };
  return count;
}

//3.  sum selected
function sumSelected (options) {
  var total = 0;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected === true) {
      total += parseInt(options[i].value);
    }
  };
  return total;
}

//4. average all the prices
function averagePrices (options) {
  var total = 0;
  for (var i = 0; i < options.length; i++) {
    total += parseInt(options[i].value);
  };
  return total/(options.length);
}

//5. average selected prices
function averageSelected (options) {
  var total = 0;
  var numberOfSelections = 0;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected == true) {
     total += parseInt(options[i].value);
     numberOfSelections ++
    }
  };
  return total/(numberOfSelections);
}









