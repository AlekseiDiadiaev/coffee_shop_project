import './app.scss';

import HomePage from '../home-page/home-page';
import OurPage from '../our-page/our-page';
import ForYourPleasure from '../for-your-pleasure/for-your-pleasure';
import Footer from '../footer/footer';
import { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import imgCard1 from '../../resources/img/card_1.jpg'
import imgCard2 from '../../resources/img/card_2.jpg'
import imgCard2Big from '../../resources/img/card_2_big.jpg'
import imgCard3 from '../../resources/img/card_3.jpg'
import imgAromistico from '../../resources/img/aromistico.jpg'

class App extends Component  {
    constructor (props){
        super(props)
        this.state = {
            data: [
                {name: "Solimo Coffee Beans 2 kg", country:"Kenya", price:"10.73$", imgUrl: imgCard3, bigImgUrl: imgCard1, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", id:"1", countSales: "1000"},
                {name: "AROMISTICO Coffee 1 kg", country:"Brazil", price:"6.99$", imgUrl: imgAromistico, bigImgUrl: imgAromistico, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", id:"2", countSales: "5"},
                {name: "AROMISTICO Coffee 1 kg", country:"Brazil", price:"6.99$", imgUrl: imgAromistico, bigImgUrl: imgAromistico, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", id:"3", countSales: "568"},
                {name: "Presto Coffee Beans 1 kg", country:"Columbia", price:"8.99$", imgUrl: imgCard2, bigImgUrl: imgCard2Big, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", id:"4", countSales: "45"},
                {name: "AROMISTICO Coffee 1 kg", country:"Brazil", price:"6.99$", imgUrl: imgAromistico, bigImgUrl: imgAromistico, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", id:"5", countSales: "7"},
                {name: "Presto Coffee Beans 1 kg", country:"Columbia", price:"8.99$", imgUrl: imgCard2, bigImgUrl: imgCard2Big, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", id:"6", countSales: "328"},
                {name: "AROMISTICO Coffee 1 kg", country:"Brazil", price:"6.99$", imgUrl: imgAromistico, bigImgUrl: imgAromistico, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", id:"7", countSales: "56"},
                {name: "Solimo Coffee Beans 2 kg", country:"Kenya", price:"10.73$", imgUrl: imgCard3, bigImgUrl: imgCard1, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", id:"8", countSales: "896"},
                {name: "AROMISTICO Coffee 1 kg", country:"Brazil", price:"6.99$", imgUrl: imgAromistico, bigImgUrl: imgAromistico, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", id:"9", countSales: "43"},   
            ]
        }
    }

    render () {    
        
        return (
            <BrowserRouter>
                    <Routes>
                        <Route path="/coffee_shop_project" element={<HomePage data={this.state.data}/>}/>
                        <Route path="/coffee_shop_project/our_page" element={<OurPage data={this.state.data}  fieldOrCard='field'/>}/>
                        <Route path="/coffee_shop_project/our_page/:id" element={<OurPage data={this.state.data} /* cardData={cardData} */ fieldOrCard='card'/>}/>
                        <Route path="/coffee_shop_project/for_your" element={<ForYourPleasure showCard={this.showCard} data={this.state.data} fieldOrCard='field'/>}/>
                    </Routes>
                <Footer changePage={this.changePage}/>   
            </BrowserRouter>
        );
    }
}

export default App;


