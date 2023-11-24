import './App.css'
import Header from './components/Header/Header'
import WordCardMap from './components/WordCardMap/WordCardMap'
import Footer from './components/Footer/Footer'
import Table from './components/Table/Table'
import words from './data/words.json'


function App() {

  return (
    <>
      <Header />
      <Table />
      <WordCardMap
        words={words}
        position={0} />
      <Footer />

    </>
  )
}

export default App
