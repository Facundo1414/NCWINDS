import { Routes,Route ,useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Navbar } from './components/organisms/navbar/Navbar'
import { Footer } from './components/organisms/footer/Footer'
import { ViajesContextProvider } from './context/ViajesContextProvider'
import { UsuarioProvider } from './context/usuario/UsuarioProvider'
import Main from './pages/main/Main'
import Search from './pages/search/Search'
import Login from './pages/login/Login'
import SignUp from './pages/login/SignUp'
import Payment from './pages/payment/Payment'
import SeatSelection from './pages/seatSelection/SeatSelection'
import ClientInfo from './pages/clientInfo/ClientInfo';
import BackendGateWayContextProvider from './context/BackendGateWayContextProvider'


const App =()=>{
  const location= useLocation();
  const[currentPage, setCurrentPage] = useState("");
  useEffect(()=>{
    setCurrentPage(location.pathname);
  },[location.pathname])
  return (
      <>
      <UsuarioProvider>
        <BackendGateWayContextProvider>
          <ViajesContextProvider>
            <Navbar currentPage={currentPage}/>
            <Routes>
              <Route path="/" element={<Main/>}></Route>
              <Route path='/search' element={<Search/>}></Route>
              <Route path='/login' element={<Login/>}></Route>  
              <Route path='/signUp' element={<SignUp/>}></Route>  
              <Route path='/payment' element={<Payment/>}></Route>  
              <Route path='/seatSelection' element={<SeatSelection/>}></Route>  
              <Route path='/clientInfo' element={<ClientInfo/>}></Route>
            </Routes>
            <Footer/>
          </ViajesContextProvider>
        </BackendGateWayContextProvider>
      </UsuarioProvider>
      </>
  )
}

export default App