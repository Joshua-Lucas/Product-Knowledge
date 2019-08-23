/*
The purpose of this challenge is to create a quiz and test the users knowledge.
1. Must ask 5 questions
2. keep track of correct questions
3. Let user know # of question they answered correctly.
4. Rank user depending on how many questions they answered correctly.


These are a few basic questions over the history of Converse.
*/


var score = 0;
 console.log( score);

//Question 1 What year was the first Converse invented?
var qOne = prompt('What year was the first converse invented?');
if (parseInt(qOne) === 1908 ){
    score +=1;
} else {
    score +=0;
}
console.log(score);

// Question 2 Who was converse's first sales man? 
var qTwo = prompt(' Who was converse\'s first sales man?');
if (qTwo.toUpperCase() === 'CHUCK TAYLOR' ){
    score +=1;
} else {
    score +=0;
}
console.log(score);

//Question 3 What is the name of the sneaker that was purchased in 1972 from B.F. Goodrich? (Hint aslo known as 'Ble Tips' and 'Smiles')
var qThree = prompt('What is the name of the sneaker that was purchased in 1972 from B.F. Goodrich? (Hint aslo known as \'Blue Tips\' and \'Smiles\')?');
if (qThree.toUpperCase() === 'JACK PURCELL' ){
    score +=1;
} else {
    score +=0;
}
console.log(score);

//Question 4 Name one of the two most famous basketball stars sponsored by Converse in the 80's (Hint: One played for the Celtics and one for the Lackers)
var qFour= prompt('Name one of the two most famous basketball stars sponsored by Converse in the 80\'s (Hint: One played for the Celtics and one for the Lackers?');
if (qFour.toUpperCase() === 'MAGIC JOHNSON' || qFour.toUpperCase()=== 'LARRY BIRD' ){
    score +=1;
} else {
    score +=0;
}
console.log(score);

//Question 5 What year did Nike aquire Converse?

var qFive = prompt('What year did Nike aquire Converse?');
if (parseInt(qFive) === 2003 ){
    score +=1;
} else {
    score +=0;
}
console.log(score);

//Grade 

if (score === 5) {
    var rank = 'You gained All Star Status'
} else if (score === 4 || score === 3) {
    var rank = 'You gained 70\'s status'
} else if (score === 2 || score === 1) {
    var rank = 'You gained One Star status'
} else
    var rank = 'Sorry you failed. Please review material and attempt quiz again.'

/*
I could have written this like this but I wanted to practice or conditional statments.

f (score === 5) {
    var rank = 'You gained All Star Status'
} else if (score >= 3) {
    var rank = 'You gained 70\'s status'
} else if (score >= 1) {
    var rank = 'You gained One Star status'
} else
    var rank = 'Sorry you failed. Please review material and attempt quiz again.'

*/


//fianl score

document.write('<h2> You scored ' + score + ' out of 5</h2>' + '<br>' + rank );
