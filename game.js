let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');

let playerMove = document.getElementById('your-move');
let computerMove = document.getElementById('computer-move');

playerImg = document.getElementById('player-move-img');
computerImg = document.getElementById('computer-move-img');

let wins = document.getElementById('game-wins');
let lose = document.getElementById('game-lose');
let tie = document.getElementById('game-tie');

let answer = document.querySelector('.answer-info');

const restartBtn = document.querySelector('.restart');

rockBtn === 'rock';
paperBtn === 'paper';
scissorsBtn === 'scissors';

let identifier;
let update;

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  lose: 0,
  tie: 0
}

wins.textContent = `${score.wins}`;
tie.textContent = `${score.tie}`;
lose.textContent = `${score.lose}`;

 function resultCompare(playerPick){
  playerMove.className = 'button-el-S-visible';
  computerMove.className = 'button-el-S-visible';
  let result = computerPick();


    if(playerPick === 'rock'){
      playerImg.className = 'image-container-S image1';

      if(result === 'rock'){
        result = 'Remis';
  
      } else if(result === 'paper'){
        result = 'Przegrana';
 
      } else if(result === 'scissors'){
        result = 'Wygrana';
      }

  }else if(playerPick === 'paper'){
    playerImg.className = 'image-container-S image2';
    if(result  === 'rock'){
      result = 'Wygrana';

    }else if(result === 'paper'){
      result = 'Remis';
      
    }else if(result === 'scissors'){
      result = 'Przegrana';
    }
  
  }else if(playerPick === 'scissors'){
    playerImg.className = 'image-container-S image3';
    if(result === 'rock'){
      result = 'Przegrana';

    }else if(result === 'paper'){
      result = 'Wygrana';
      
    }else if(result === 'scissors'){
      result = 'Remis';
    }
  }

  answer.textContent = `${result}`

  if(result === 'Wygrana'){
    score.wins += 1;
    wins.textContent = `${score.wins}`;
  }else if( result === 'Remis'){
    score.tie += 1;
    tie.textContent = `${score.tie}`;
  }else if(result === 'Przegrana'){
    score.lose += 1;
    lose.textContent = `${score.lose}`;
  }

 let jsonScore = JSON.stringify(score)

localStorage.setItem('score', jsonScore);
}

 function computerPick(){
  let computerMovement = Math.random();
 
  if(computerMovement > 0 && computerMovement <= 1/3){
    result = 'rock' ; 
    computerImg.className = 'image-container-S image1';
    console.log('kamień');

  } else if(computerMovement > 1/3 && computerMovement <= 2/3){
    result = 'paper'; 
    computerImg.className = 'image-container-S image2';
    console.log('papier');

  } else if(computerMovement > 2/3 && computerMovement <= 1){
    result = 'scissors';
    computerImg.className = 'image-container-S image3';
    console.log('nożyce');
  }

  return result;
}

restartBtn.addEventListener('click', ()=>{
 
  tie.textContent = ` `;
  lose.textContent = ` `;
  wins.textContent = ` `;

  score.tie = 0;
  score.lose = 0;
  score.wins = 0;

  playerMove.className = 'button-el-S';

  computerMove.className = 'button-el-S';

  localStorage.removeItem('score')
})

rockBtn.addEventListener('click', ()=>{
  resultCompare('rock');           
 })

paperBtn.addEventListener('click', ()=>{
  resultCompare('paper');
})

scissorsBtn.addEventListener('click', ()=>{
  resultCompare('scissors');
})

