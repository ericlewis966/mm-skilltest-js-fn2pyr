import './style.css';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `Instructions: answer each question by writing to console.log
  <br> 
  <br>
  View the output in the console in the bottom right`;

/*

  Instructions
  Answer each question by writing to console.log
  This should take about 3 mins

  View the output in the console in the bottom right

  EXAMPLE:

  Question: Add an exclamation to the end of a var `text`

  Your Answer: console.log(`${text}!`);

  Submitting your code:
  Copy the entire index.ts file contents and send them to submit your work

 */

//
// PART 1 - Strings
// Using the var text... write each answer to console.log
//

const text = 'I am a master at strings';

// 1 - Replace first occurence of 'a' with the letter z
console.log('1: ' + text);
console.log(text.replace(/a/, 'z'));

// 2 - Replace all occurences of 'a' with the letter z
console.log('2: ' + text);
console.log(text.replace(/a/g, 'z'));

// 3 - Print 0-based position of the first letter 'm'
console.log('3: ' + text);
console.log(text.indexOf('m'))

//
// PART 2 - Arrays
// Using the var list... write each answer to console.log
//

var list = [2, 6, 3, 7, 9];

// 4 - Sum only the ODD numbers in the list
console.log('4: ' + list);

var sum = 0;

for (var i = 0; i < list.length; i++) {
  if (list[i] % 2 !== 0) { // if number is odd
    sum += list[i]; // add it to sum
  }
}

console.log('4: ' + sum);

// 5 - Sort the list highest to lowest
console.log('5: ' + list);
list.sort(function(a, b) {
  return b - a;
});
console.log('5: ' + list);


// 6 - Print the numbers in a ~ delimited string like '1~2~3'
console.log('6: ' + list);
var delimitedString = list.join('~');
console.log('6: ' + delimitedString);
