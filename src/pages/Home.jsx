
import Hero from '../component/Hero';
import Services from '../component/Services';
import ScrollingText from '../component/strips/stripfirst';
import HeroSection from '../component/herosection.jsx/herosection';
import Navbar from '../component/navbar/navbar';
import GraphicPannel from '../component/graphicpannnel/graphicpannel';


function Home() {

  return (
    <><div>
      <Navbar></Navbar>
      <Hero></Hero>
      <HeroSection></HeroSection>
      <GraphicPannel></GraphicPannel>
      <Services/> 
      <ScrollingText></ScrollingText>  
    </div>
    </>
  );
}

export default Home;
