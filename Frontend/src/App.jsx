import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Main } from './pages/Main'
import Navbar from './utils/Navbar'
import Footer from './utils/Footer'

function App() {
  return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route> // main 
          <Route></Route> // 
        </Routes>
        <Footer/>
      </>
  )
}

export default App
