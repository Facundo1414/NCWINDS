import About from '../../components/organisms/about/About';
import Destinations from '../../components/organisms/destinations/Destinations'
import Main_elegirnosSection from '../../components/organisms/Main_elegirnosSection/Main_elegirnosSection'
import Header from '../../components/organisms/header/Header';
import "./Main.css"
export const Main = () => {
  return (
    <div className='container-main'>   
      <Header/>
      <Destinations/>
      <Main_elegirnosSection/>  
      <About />
    </div>
    
  )
}
