import React, { useState } from 'react'

const choices = ['rock', 'paper', 'scissors'];

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState('');

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
  };

  const handleComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const playGame = () => {
    handleComputerChoice();
    if (playerChoice === computerChoice) {
      setResult('Tie!');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
      setPlayerScore((prevScore) => prevScore + 1);
    } else {
      setResult('Computer wins!');
      setComputerScore((prevScore) => prevScore + 1);
    }
  };
  return (
    <div className='w-50 mx-auto mt-4'>
      <h1 className='text-success'>Rock, Paper, Scissors</h1>
      <div>
        <span className='text-muted text-center'>Choose between:</span>
        <div className="d-flex align-items-center justify-content-center" style={{gap:'15px'}}>
        <button onClick={() => handlePlayerChoice('rock')} className="btn btn-light">Rock</button>
        <button onClick={() => handlePlayerChoice('paper')} className="btn btn-light">Paper</button>
        <button onClick={() => handlePlayerChoice('scissors')} className="btn btn-light">Scissors</button>
        </div>
      </div>
      <button onClick={playGame} className="btn btn-success">Play Now !</button>
      <div>
        <p >You chose: {playerChoice}</p>
        <p>Computer chose: {computerChoice}</p>
        Result:<h3 className='text-danger'>{result}</h3>
      </div>
      <h2 className='text-success'>The Score</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Computer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{playerScore}</td>
            <td>{computerScore}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Game