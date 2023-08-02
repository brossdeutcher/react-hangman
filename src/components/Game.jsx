import GuessForm from './components/GuessForm'
import WordDisplay from './components/WordDisplay'
import Graveyard from './components/Graveyard'

const Game = () => {
  return (
    <>
      <GuessForm />
      <WordDisplay />
      <Graveyard />
    </>
  )
}

export default Game;