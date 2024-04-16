import { Routes,Route ,useLocation } from 'react-router-dom'
import { Main } from './pages/main/Main'
import Navbar from './components/organisms/navbar/Navbar'
import Footer from './components/organisms/footer/Footer'
import { useEffect, useState } from 'react'
import {Search} from './pages/search/Search'
import Login from './pages/login/Login'
import SignUp from './pages/login/SignUp'
import ViajesContextProvider from './context/ViajesContextProvider'
import Payment from './pages/payment/Payment'

function App() {
  const location= useLocation();
  const[currentPage, setCurrentPage] = useState("");
  useEffect(()=>{
    setCurrentPage(location.pathname);
  },[location.pathname])
  return (
      <>
        <ViajesContextProvider>
          <Navbar currentPage={currentPage}/>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path='/search' element={<Search/>}></Route>
            <Route path='/seat' element={<Seat/>}></Route>
          <Route path='/login' element={<Login/>}></Route>  
            <Route path='/signUp' element={<SignUp/>}></Route>  
            <Route path='/payment' element={<Payment/>}></Route>  
          </Routes>
          <Footer/>
        </ViajesContextProvider>
      </>
  )
}

export default App
