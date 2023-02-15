import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
    const {gameOver,currAttempt,correctWord} = useContext(AppContext);
  return (
    <div className='GameOver'>
        <h3>{gameOver.guessedWord ? 'You Got It Right' : 'You Failed'}</h3>
        <h1>Correct: {correctWord}</h1>
        {gameOver.guessedWord && (
        <h3>You Guessed In {currAttempt.attempt} Attempts</h3>
        )}
    </div>
  );
}

export default GameOver