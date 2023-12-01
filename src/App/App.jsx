import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage, ErrorPage, GamePage, TablePage } from '../Pages'
import Header from '../Components/Header/Header'
import Footer from '../components/Footer/Footer'
import Spinner from '../Components/Spinner/Spinner'
import wordsJson from '../data/words.json'
import '../style/App.css'


function App() {
  const [words, setWords] = useState(() => wordsJson || false);
  const stateWords = { words, setWords }

  if (!words) {
    return <Spinner />
  }
  return (
    <>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/game' element={<GamePage stateWords={stateWords} />} />
            <Route path='/table' element={<TablePage stateWords={stateWords} />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  )
}

export default App
