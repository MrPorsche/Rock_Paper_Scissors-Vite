import React, { useState } from 'react';
import './assets/Styling/style.css';

import Rock from './assets/images/rock.png';
import Paper from './assets/images/paper.png';
import Scissors from './assets/images/scissors.png';

function App() {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [msg, setMsg] = useState('Play your move!');
  const [msgStyle, setMsgStyle] = useState({});

  const genCompChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  };

  const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      setUserScore(userScore + 1);
      setMsg(`You win! Your ${userChoice} beats ${compChoice}`);
      setMsgStyle({ backgroundColor: "green" });
    } else {
      setCompScore(compScore + 1);
      setMsg(`You lose!, Try again. ${compChoice} beats your ${userChoice}`);
      setMsgStyle({ backgroundColor: "red" });
    }
  };

  const playGame = (userChoice) => {
    // Generate Computer Choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
      // Game Draw
      setMsg('It was draw!, Try again.');
      setMsgStyle({ backgroundColor: "#081B31" });
    } else {
      let userWin = true;
      if (userChoice === 'rock') {
        userWin = compChoice === 'paper' ? false : true;
      } else if (userChoice === 'paper') {
        userWin = compChoice === 'scissors' ? false : true;
      } else {
        userWin = compChoice === 'rock' ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };

  return (
    <div>
      <h1>Rock Paper Scissors!</h1>
      <div className="choices">
        <div className="choice" id="rock" onClick={() => playGame('rock')}>
          <img src={Rock} alt="Rock Icon Image" />
        </div>
        <div className="choice" id="paper" onClick={() => playGame('paper')}>
          <img src={Paper} alt="Paper Icon Image" />
        </div>
        <div className="choice" id="scissors" onClick={() => playGame('scissors')}>
          <img src={Scissors} alt="Scissors Icon Image" />
        </div>
      </div>
      <div className="score-board">
        <div className="score">
          <p id="user">{userScore}</p>
          <p>User</p>
        </div>
        <div className="score">
          <p id="comp">{compScore}</p>
          <p>Computer</p>
        </div>
      </div>
      <div className="msg-container" style={msgStyle}>
        <p id="msg">{msg}</p>
      </div>
    </div>
  );
}

export default App;