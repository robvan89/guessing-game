
var score = 0;
var missed = "";
var name = prompt('What is your name?');
console.log(name);
var myNum = Math.floor(Math.random() * 100 + 1);
console.log(myNum);
var sccon = '<img src="success.jpg">';
var fcon = '<img src="fail.jpg">';
var guesses = 7;
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
'Good job! You answered no, which is correct. Great success!',
"You answered yes, but I've actually never had regular Mountain Dew. I'm weird, I know, you don't have to remind me.",
'Good job! You answered no, which was correct. Let\'s keep going!',
"You answered yes, but I don't have any tattoos - I can't find anything I'd want to commit to. Let us continue!",
"",
"",
"",
"Sorry, you ran out of guesses!",
"Congratulations, " + name + "! You found my number!",
"Sorry, you got it wrong.",
""
];

function qr1() {
var qu1 = prompt(qus[0]);
qu1 = qu1.toLowerCase();
console.log(qu1 + " was the player's response to question 1.");
qu1 = qu1.charAt(0);
var qget1 = document.getElementById('qg1');
var qget2 = document.getElementById('qe1');
console.log(qget1 + "is qget1");
if(qu1 == answs[0]) {
score++;
qget1.textContent = resps[0];
qget2.innerHTML = sccon;
document.getElementById("qg1").className = "success";
} else {
missed += "1";
qget2.innerHTML = fcon;
qget1.textContent = resps[1];
document.getElementById("qg1").className = "fail";
}
}

function qr2() {
var qu2 = prompt(qus[1]);
qu2 = qu2.toLowerCase();
console.log(qu2 + " was the player's response to question 2.");
qu2 = qu2.charAt(0);
qget1 = document.getElementById('qg2');
qget2 = document.getElementById('qe2');
if(qu2 == answs[1])
{
score++;
qget1.textContent = resps[2];
qget2.innerHTML = sccon;
document.getElementById("qg2").className = "success";
}
else {
missed += " 2";
qget2.innerHTML = fcon;
qget1.textContent = resps[3];
document.getElementById("qg2").className = "fail";
}
}

function qr3() {
var qu3 = prompt(qus[2]);
qu3 = qu3.toLowerCase();
console.log(qu3 + " was the player's response to question 3.");
qu3 = qu3.charAt(0);
qget1 = document.getElementById('qg3');
qget2 = document.getElementById('qe3');
if(qu3 == answs[2])
{
score++;
qget2.innerHTML = sccon;
qget1.textContent = resps[4];
document.getElementById("qg3").className = "success";
}
else {
missed += " 3";
qget2.innerHTML = fcon;
qget1.textContent = resps[5];
document.getElementById("qg3").className = "fail";
}
}

function qr4() {
var qu4 = prompt(qus[3]);
console.log(qu4 + " was the player's response to question 4.");
qget1 = document.getElementById('qg4');
qget2 = document.getElementById('qe4');
var q4t = isNaN(qu4);
while (q4t == true) {
alert("Please enter a number.")
qu4 = prompt(qus[3]);
console.log(qu4 + " was the player's response to question 4.");
parseInt(qu4);
q4t = isNaN(qu4);
}
parseInt(qu4);
resps[6] = 'Good job, ' + name + '! Fur flew on the daily during my childhood.';
resps[7] = "You answered " + qu4 + ", but there weren't that many. My life wasn't an episode of Animal Hoarders.";
resps[8] = "You answered " + qu4 + ". My mom's cat lady game was a bit stronger than that!"
if(qu4 == answs[3] || qu4 == answs[4])
{
score++;
qget2.innerHTML = sccon;
qget1.textContent = resps[6];
document.getElementById("qg4").className = "success";
}
else if (qu4 > 5) {
  qget2.innerHTML = fcon;
  qget1.textContent = resps[7];
  document.getElementById("qg4").className = "fail";
missed += ' 4';
}
else {
  qget2.innerHTML = fcon;
  qget1.textContent = resps[8];
  document.getElementById("qg4").className = "fail";
missed += ' 4';
}
}

function qr5() {
var qu5 = prompt(qus[4]);
parseInt(qu5);
qget1 = document.getElementById('qg5');
qget2 = document.getElementById('qe5');
do {
if (qu5 == myNum && qu5 !== NaN) {
score++;
solved=true;
qget2.innerHTML = sccon;
qget1.textContent = resps[10];
document.getElementById("qg5").className = "success";
}
else if (qu5 == NaN) {
  qu5 = prompt(qus[4] + ' Please enter a whole number above zero.');
  parseInt(qu5);
}
else if (qu5 > myNum && guesses < 8 && guesses > 1) {
  guesses--;
  qus[4] = 'Pick a lower number. You have ' + guesses + ' guesses remaining.';
  qu5 = prompt(qus[4]);
  parseInt(qu5);
}
else if (qu5 < myNum && guesses < 8 && guesses > 1) {
  guesses--;
  qus[4] = 'Pick a higher number. You have ' + guesses + ' guesses remaining.';
  qu5 = prompt(qus[4]);
  parseInt(qu5);
}
else {
  missed += " 5";
  qget2.innerHTML = fcon;
  qget1.textContent = resps[9];
  document.getElementById("qg5").className = "fail";
  solved = true;
}
} while(solved == false);
}

function qr6() {
var qu6 = prompt(qus[5]);
solved = false;
qget1 = document.getElementById('qg6');
qget2 = document.getElementById('qe6');
qu6 = qu6.toLowerCase();
console.log(qu6);
do {
  if(qu6 != answs[i]) {
    i++;
  }
  else {
    resps[12] = "You're right, I wouldn't vote for " + qu6 + ".";
    solved = true;
    score++;
    qget2.innerHTML = sccon;
    qget1.textContent = resps[12];
    document.getElementById("qg6").className = "success";
  }
} while(i < 22 && solved == false);
if(i == 21 && solved !== true) {
  missed += " 6";
  qget2.innerHTML = fcon;
  qget1.textContent = resps[11];
  document.getElementById("qg6").className = "fail";
}
}

function endOfGame() {
var tally = "Quiz incomplete";
if (score < 5) {
tally = name + ', your final score was ' + score + '/6. You missed questions ' + missed + '.';
} else if (score == 5) {
  tally = name + ', your final score was ' + score + '/6. You missed question ' + missed + '.';
} else {
  tally = "You got them all right! Good job!";
}
var nki = document.getElementById('nukeit');
nki.textContent = tally;
}

function regame() {
  qr1();
  qr2();
  qr3();
  qr4();
  qr5();
  qr6();
  endOfGame();
}

qr1();
qr2();
qr3();
qr4();
qr5();
qr6();
endOfGame();
