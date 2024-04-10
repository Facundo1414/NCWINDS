import { Routes,Route } from 'react-router-dom'
import { Main } from './pages/main/Main'
import Navbar from './components/organisms/navbar/Navbar'
import Footer from './components/organisms/footer/Footer'
import Search from './pages/main/Search'
import { useEffect, useState } from 'react'

function App() {
  const[currentPage, setCurrentPage] = useState("");
  useEffect(()=>{
    setCurrentPage(window.location.pathname);
  },[])
  return (
      <>
        <Navbar currentPage={currentPage}/>
        <Routes>
          <Route path="/" Component={Main}></Route>
          <Route path='/search' Component={Search}></Route>  
        </Routes>
        <Footer/>
      </>
  )
}

export default App
