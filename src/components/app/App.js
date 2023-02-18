import './app.scss';

import HeaderMain from '../header-main/header-main';
import OurBest from '../our-best/our-best';
import AboutUs from '../about-us/about-us';
import Footer from '../footer/footer';

function App() {
    return (
        <div>
            <HeaderMain /> 
            <main>
            <AboutUs /> 
            <OurBest />    
            </main>
            <Footer/>   
        </div>
    );
}

export default App;
