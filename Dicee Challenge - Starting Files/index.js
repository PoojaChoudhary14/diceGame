var randomNumber1=Math.floor(Math.random() *6)+1; //select random number between 1-6
var randomDiceImage="dice" + randomNumber1 + ".png";
var randomImageSource="images/" + randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

//if player 1 wins
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
//if player2 wins
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
//if its a draw
else{
  document.querySelector("h1").innerHTML="Draw!";
}
