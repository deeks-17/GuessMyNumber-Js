'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='🥳correct number';
document.querySelector('.number').textContent=23;
document.querySelector('.guess').value=20;
console.log(document.querySelector('.guess').value);
document.querySelector('.score').textContent=25;
*/
let secretNumber = Math.trunc(Math.random()*20+1);
let score = 20; 
let highScore =0;
const messageMe = function(message){
document.querySelector('.message').textContent=message;
}
const numberMe = function(number){
 document.querySelector('.number').textContent=number;
}

document.querySelector('.check').addEventListener('click',function(){
   const guess = Number( document.querySelector('.guess').value); 
   console.log(guess,typeof guess);
   if(!guess){
   messageMe( " No Number");
  
   }
   else if(guess===secretNumber ){  
   messageMe('🥳correct number');
   numberMe( secretNumber);
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width= '30rem';
    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
   }
   else if(guess!==secretNumber){
    if(score>1){
      document.querySelector('.message').textContent= (guess>secretNumber)?"too high⚡":"too low👇";
        score--;
        document.querySelector('.score').textContent=score;

    }
    else{
       messageMe('you lost the Game☹️');
        document.querySelector('.score').textContent=0;
    }
   }
})
document.querySelector('.again').addEventListener('click',function(){
   messageMe('Start guessing...');
    numberMe("?");
    secretNumber = Math.trunc(Math.random()*20+1);
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width= '15rem';
    document.querySelector('.score').textContent=score;    
    
})