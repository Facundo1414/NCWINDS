import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Main } from './pages/main/Main'
import Navbar from './components/organisms/navbar/Navbar'
import Footer from './components/organisms/footer/Footer'

function App() {
  return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" Component={Main}></Route>
          <Route></Route>  
        </Routes>
        <Footer/>
      </>
  )
}

export default App
