var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

function dice()
{
    
    if(randomNumber1===1)  
{
    document.getElementById("dice1").setAttribute("src", " dice1.png");
}

else if(randomNumber1===2)
{
    document.getElementById("dice1").setAttribute("src", " dice2.png");
}
else if(randomNumber1===3)
{
    document.getElementById("dice1").setAttribute("src", " dice3.png");
}
else if(randomNumber1===4)
{
    document.getElementById("dice1").setAttribute("src", " dice4.png");
}
else if(randomNumber1===5)
{
    document.getElementById("dice1").setAttribute("src", " dice5.png");
}
else 
{
    document.getElementById("dice1").setAttribute("src", " dice6.png");
}

//dice 2

if(randomNumber2===1)

{
    document.getElementById("dice2").setAttribute("src", " dice1.png");
}

else if(randomNumber2===2)
{
    document.getElementById("dice2").setAttribute("src", " dice2.png");
}
else if(randomNumber2===3)
{
    document.getElementById("dice2").setAttribute("src", " dice3.png");
}
else if(randomNumber2===4)
{
    document.getElementById("dice2").setAttribute("src", " dice4.png");
}
else if(randomNumber2===5)
{
    document.getElementById("dice2").setAttribute("src", " dice5.png");
}
else 
{
    document.getElementById("dice2").setAttribute("src", " dice6.png");
}


    
}


dice();
if(randomNumber1 > randomNumber2)
{
    document.getElementById("winner").innerHTML="player 1";
}
else if (randomNumber1 < randomNumber2)
{

    document.getElementById("winner").innerHTML="PLAYER 2";
}
else
{
    document.getElementById("winner").innerHTML="DRAW";
}