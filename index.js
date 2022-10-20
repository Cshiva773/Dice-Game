var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1);
randomNumber1+=1;
var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2);
randomNumber2+=1;
var i="dice"+ randomNumber1 +".png";
var ii="dice"+ randomNumber2 +".png";
document.querySelectorAll("img")[0].setAttribute("src",i);
document.querySelectorAll("img")[1].setAttribute("src",ii);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML="DRAW"
}
