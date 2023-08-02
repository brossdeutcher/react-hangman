import './App.css'
import Game from './components/Game'
import Instructions from './components/Instructions'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Game />}></Route>
        <Route path='/instructions' element={<Instructions />}></Route>
      </Routes>
    </>
  )
}

export default App
