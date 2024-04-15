import { Routes,Route ,useLocation } from 'react-router-dom'
import { Main } from './pages/main/Main'
import Navbar from './components/organisms/navbar/Navbar'
import Footer from './components/organisms/footer/Footer'
import { useEffect, useState } from 'react'
import {Search} from './pages/search/Search'
import Login from './pages/login/Login'
import SignUp from './pages/login/SignUp'
import { Seat } from './pages/seat/Seat'

function App() {
  const location= useLocation();
  const[currentPage, setCurrentPage] = useState("");
  useEffect(()=>{
    setCurrentPage(location.pathname);
  },[location.pathname])
  return (
      <>
        <Navbar currentPage={currentPage}/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/seat' element={<Seat/>}></Route>
          <Route path='/login' element={<Login/>}></Route>  
          <Route path='/signUp' element={<SignUp/>}></Route>  
        </Routes>
        <Footer/>
      </>
  )
}

export default App
