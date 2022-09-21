const player = {
    currentChoice: null
  };
  
  const computer = {
    currentChoice: null
  };
  
  let playerScore = 0;
  let computerScore = 0;
  
  function buttonClick(e) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex]
  
    if (e.target.id === 'generate-rock'){
      player.currentChoice = choices[0]
    } else if (e.target.id === 'generate-paper') {
      player.currentChoice = choices[1]
    } else {
      player.currentChoice = choices[2]
    }
  
    if (computer.currentChoice === player.currentChoice) {
      document.getElementById('results').innerText = "It's a tie! You both chose " + computer.currentChoice;
    } else if (computer.currentChoice === choices[0]) {
      if (player.currentChoice === choices[1]) {
        playerScore += 1;
        document.getElementById('player-score').innerText = playerScore;
        document.getElementById('results').innerText = 
          "You win! The computer chose " + 
          computer.currentChoice + " and the player chose " + 
          player.currentChoice
        
      } else {
        computerScore += 1;
        document.getElementById('computer-score').innerText = computerScore;
        document.getElementById('results').innerText = 
          "The computer wins! The computer chose " + 
          computer.currentChoice + " and You chose " + 
          player.currentChoice
      }
    } else if (computer.currentChoice === choices[1]) {
      if (player.currentChoice === choices[2]) {
        playerScore += 1;
        document.getElementById('player-score').innerText = playerScore;
        document.getElementById('results').innerText = 
          "You win! The computer chose " + 
          computer.currentChoice + " and you chose " + 
          player.currentChoice
      } else {
        computerScore += 1;
        document.getElementById('computer-score').innerText = computerScore;
        document.getElementById('results').innerText = 
          "The computer wins! The computer chose " + 
          computer.currentChoice + " and you chose " + 
          player.currentChoice
      }
    } else if (computer.currentChoice === choices[2]) {
      playerScore += 1;
      document.getElementById('player-score').innerText = playerScore;
      document.getElementById('results').innerText = 
          "You win! The computer chose " + 
          computer.currentChoice + " and you chose " + 
          player.currentChoice
      } else {
        computerScore += 1;
        document.getElementById('computer-score').innerText = computerScore;
        document.getElementById('results').innerText = 
          "The computer wins! The computer chose " + 
          computer.currentChoice + " and you chose " + 
          player.currentChoice
    }
  }
  
  let resetScore = 0;
  
  function resetClick(e) {
    resetScore = 0;
    playerScore = 0;
    computerScore = 0;
    document.getElementById('reset-btn').value
    document.getElementById('player-score').innerText = resetScore;
    document.getElementById('computer-score').innerText = resetScore;
  }
  
  document.getElementById('generate-rock').addEventListener('click', buttonClick);
  
  document.getElementById('generate-paper').addEventListener('click', buttonClick);
  
  document.getElementById('generate-scissors').addEventListener('click', buttonClick);
  
  document.getElementById('reset-btn').addEventListener('click', resetClick);