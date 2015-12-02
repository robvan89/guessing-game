function ggame(name,qu1,qu2,qu3)
{
var score = 0;
var missed = "";
var name = prompt('What is your name?');
console.log(name);
var qu1 = prompt('Hello, ' + name + '. Question 1. Does my mother have a dog named Amber?');
qu1 = qu1.toLowerCase();
console.log(qu1 + " was the player's response to question 1.");
qu1 = qu1.charAt(0);
if(qu1 == 'y')
{
score++;
alert('Good job, ' + name + '! Time for question 2!');
}
else {
missed += "1";
alert('My mother does have a dog named Amber.');
}
var qu2 = prompt('Question 2. Have I ever had regular Mountain Dew?');
qu2 = qu2.toLowerCase();
console.log(qu2 + " was the player's response to question 2.");
qu2 = qu2.charAt(0);
if(qu2 == 'n')
{
score++;
alert('Good job, ' + name + '! Great success!');
}
else {
missed += " 2";
alert("I've never had regular Mountain Dew. I'm weird, I know, you don't have to remind me.");
}
var qu3 = prompt('Question 3. Do I have any tattoos?');
qu3 = qu3.toLowerCase();
console.log(qu3 + " was the player's response to question 3.");
qu3 = qu3.charAt(0);
if(qu3 == 'n')
{
score++;
alert('Good job, ' + name + '! Just one more after this!');
}
else {
missed += " 3";
alert("I don't have any tattoos - I can't find anything I'd want to commit to. One more question to go.");
}
var qu4 = prompt('Question 4. How many cats did my parents have when I was growing up?');
qu4 = qu4.toLowerCase();
console.log(qu4 + " was the player's response to question 4.");
parseInt(qu4);
if(qu4 == 5)
{
score++;
alert('Good job, ' + name + '! Fur flew on the daily during my childhood.');
}
else if (qu4 > 5) {
alert("Not that many! My life wasn't an episode of Animal Hoarders.");
}
else if (qu4 < 5) {
alert("My mom's cat lady game was a bit stronger than that!");
}
if (score < 4)
{
alert('Your score was ' + score + '/4. You missed questions ' + missed + '. Better luck next time!');
}
if (score == 4)
{
  alert('You got them all right! Good job!');
}
var tally = name + ', your final score was ' + score + '/4.'
document.getElementById('nukeit');
nukeit.textContent = tally;
}
