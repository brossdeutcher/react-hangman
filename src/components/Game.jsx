import GuessForm from './GuessForm'
import WordDisplay from './WordDisplay'
import Graveyard from './Graveyard'

const Game = (props) => {

  return (
    <>
      <WordDisplay currentWord={props.currentWord} />
      <GuessForm />
      <Graveyard />
    </>
  )
}

export default Game;