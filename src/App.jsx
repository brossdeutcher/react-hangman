import { useState, useEffect } from 'react'
import './App.css'
import Game from './components/Game'
import Instructions from './components/Instructions'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  const [currentWord, setCurrentWord] = useState(null);

  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch(`https://random-word-api.herokuapp.com/word?lang=en&length=${Math.floor(Math.random()*3)+4}`);
      const result = await response.json();
      setCurrentWord(result[0]);
    }
    fetchWord();
  }, [])

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Game currentWord={currentWord} />}></Route>
        <Route path='/instructions' element={<Instructions />}></Route>
      </Routes>
    </>
  )
}

export default App
