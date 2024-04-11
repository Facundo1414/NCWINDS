import { Routes,Route } from 'react-router-dom'
import { Main } from './pages/main/Main'
import Navbar from './components/organisms/navbar/Navbar'
import Footer from './components/organisms/footer/Footer'
import { useEffect, useState } from 'react'
import {Search} from './pages/search/Search'
import Login from './pages/login/Login'

function App() {
  const[currentPage, setCurrentPage] = useState("");
  useEffect(()=>{
    setCurrentPage(window.location.pathname);
  },[window.location.pathname])
  return (
      <>
        <Navbar currentPage={currentPage}/>
        <Routes>
          <Route path="/" Component={Main}></Route>
          <Route path='/search' Component={Search}></Route>  
          <Route path='/login' Component={Login}></Route>  
        </Routes>
        <Footer/>
      </>
  )
}

export default App
