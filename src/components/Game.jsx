import GuessForm from './GuessForm'
import WordDisplay from './WordDisplay'
import Graveyard from './Graveyard'
import { useState } from 'react'

const Game = (props) => {

  // const [currentWord, setCurrentWord] = useState(null);
  const [guessedLetter, setGuessedLetter] = useState("");

  return (
    <>
      <WordDisplay currentWord={props.currentWord} />
      <GuessForm guessedLetter={guessedLetter} setGuessedLetter={setGuessedLetter} />
      <Graveyard />
    </>
  )
}

export default Game;