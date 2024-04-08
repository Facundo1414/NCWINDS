import { Routes,Route } from 'react-router-dom'
import { Main } from './pages/main/Main'
import Navbar from './components/organisms/navbar/Navbar'
import Footer from './components/organisms/footer/Footer'
import Search from './pages/main/Search'

function App() {
  return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" Component={Main}></Route>
          <Route path="/search" Component={Search}></Route>  
        </Routes>
        <Footer/>
      </>
  )
}

export default App
