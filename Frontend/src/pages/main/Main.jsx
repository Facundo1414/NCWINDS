import { About } from '../../components/organisms/about/About';
import { Destinations } from '../../components/organisms/destinations/Destinations'
import { Header } from '../../components/organisms/header/Header';
import { ChooseUsSection } from '../../components/organisms/chooseUsSection/ChooseUsSection';
import "./Main.css"


const Main = () => {

  return (
    <div className='container-main'>   
      <Header/>
      <Destinations/>
      <ChooseUsSection />
      <About />
    </div>
    
  )
}

export default Main;