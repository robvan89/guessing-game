function ggame(name,qu1,qu2,qu3)
{
var score = 0;
var missed = "";
var name = prompt('What is your name?');
console.log(name);
var myNum = Math.floor(Math.random() * 100 + 1);
console.log(myNum);
var guesses = 10;
var q1 = 'Hello, ' + name + '. Question 1. Does my mother have a dog named Amber?';
var qus = [q1,
'Question 2. Have I ever had regular Mountain Dew?',
'Question 3. Do I have any tattoos?',
'Question 4. How many cats did my parents have when I was growing up?',
'Question 5. I\'m thinking of a number. Find it. You have ' + guesses + ' guesses remaining.',
'Question 6. Name a 2016 presidential candidate I\'m not willing to vote for.'];
var solved = false;
var i = 6;
var answs = ['y', 'n', 'n', 5, 'five', myNum, 'bernie sanders', 'carly fiorina', 'donald trump', 'hillary clinton', 'martin o\'malley', 'chris christie', 'ted cruz', 'ben carson', 'john kasich', 'mike huckabee', 'jeb bush', 'lindsay graham', 'rick santorum', 'rand paul', 'george pataki', 'marco rubio'];
var resps = ['Good job! You answered yes, which is correct. Time for question 2!',
'You answered no, but my mother does have a dog named Amber.',
'Good job! You answered no, which was correct. Great success!',
"You answered yes, but I've actually never had regular Mountain Dew. I'm weird, I know, you don't have to remind me.",
'Good job! You answered no, which was correct. Let\'s keep going!',
"You answered yes, but I don't have any tattoos - I can't find anything I'd want to commit to. Let us continue!"]
var qu1 = prompt(qus[0]);
qu1 = qu1.toLowerCase();
console.log(qu1 + " was the player's response to question 1.");
qu1 = qu1.charAt(0);
if(qu1 == answs[0])
{
score++;
alert(resps[0]);
}
else {
missed += "1";
alert(resps[1]);
}
var qu2 = prompt(qus[1]);
qu2 = qu2.toLowerCase();
console.log(qu2 + " was the player's response to question 2.");
qu2 = qu2.charAt(0);
if(qu2 == answs[1])
{
score++;
alert(resps[2]);
}
else {
missed += " 2";
alert(resps[3]);
}
var qu3 = prompt(qus[2]);
qu3 = qu3.toLowerCase();
console.log(qu3 + " was the player's response to question 3.");
qu3 = qu3.charAt(0);
if(qu3 == answs[2])
{
score++;
alert(resps[4]);
}
else {
missed += " 3";
alert(resps[5]);
}
var qu4 = prompt(qus[3]);
console.log(qu4 + " was the player's response to question 4.");
var q4t = isNaN(qu4);
while (q4t == true) {
alert("Please enter a number.")
qu4 = prompt(qus[3]);
console.log(qu4 + " was the player's response to question 4.");
parseInt(qu4);
q4t = isNaN(qu4);
}
parseInt(qu4);
if(qu4 == answs[3] || qu4 == answs[4])
{
score++;
alert('Good job, ' + name + '! Fur flew on the daily during my childhood.');
}
else if (qu4 > 5) {
alert("You answered " + qu4 + ", but there weren't that many. My life wasn't an episode of Animal Hoarders.");
missed += ' 4';
}
else {
alert("You answered " + qu4 + ". My mom's cat lady game was a bit stronger than that!");
missed += ' 4';
}

var qu5 = prompt(qus[4]);
parseInt(qu5);
do {
if (qu5 == myNum && qu5 !== NaN) {
score++;
alert('Congratulations, you found my number!');
solved=true;
}
else if (qu5 == NaN) {
  qu5 = prompt(qus[4] + ' Please enter a whole number above zero.');
  parseInt(qu5);
}
else if (qu5 > myNum && guesses < 11 && guesses > 1) {
  guesses--;
  qus[4] = 'Pick a lower number. You have ' + guesses + ' guesses remaining.';
  qu5 = prompt(qus[4]);
  parseInt(qu5);
}
else if (qu5 < myNum && guesses < 11 && guesses > 1) {
  guesses--;
  qus[4] = 'Pick a higher number. You have ' + guesses + ' guesses remaining.';
  qu5 = prompt(qus[4]);
  parseInt(qu5);
}
else {
  missed += " 5";
  solved = true;
}
} while(solved == false);

var qu6 = prompt(qus[5]);
solved = false;
qu6 = qu6.toLowerCase();
console.log(qu6);
do {
  if(qu6 != answs[i]) {
    i++;
  }
  else {
    solved = true;
    score++;
    alert('You\'re right, I wouldn\'t vote for ' + qu6 + '!');
  }
} while(i < 22 && solved == false);
if(i == 21 && solved !== true) {
  missed += " 6";
}

if (score < 6)
{
alert('Your score was ' + score + '/6. You missed questions ' + missed + '. Better luck next time!');
}
if (score == 6)
{
  alert('You got them all right! Good job!');
}
var tally = name + ', your final score was ' + score + '/6.'
var nki = document.getElementById('nukeit');
nki.textContent = tally;
}
ggame();
