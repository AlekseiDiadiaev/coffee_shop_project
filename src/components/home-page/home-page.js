import HeaderMain from '../header-main/header-main';
import OurBest from '../our-best/our-best';
import AboutUs from '../about-us/about-us';

function HomePage ({changePage, data, showCard}) {
    return (
        <div>
            <HeaderMain changePage={changePage}/> 
            <main>
            <AboutUs /> 
            <OurBest data={data} showCard={showCard}/>    
            </main>
        </div>
    );
  }
  
  export default HomePage;