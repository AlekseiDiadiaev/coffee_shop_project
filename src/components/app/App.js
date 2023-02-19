import './app.scss';

import HomePage from '../home-page/home-page';
import OurPage from '../our-page/our-page';
import ForYourPleaseure from '../for-your-pleasure/for-your-pleasure';
import Footer from '../footer/footer';
import { Component } from 'react';
 

class App extends Component  {
    constructor (props){
        super(props)
        this.state = {
            data: [
                {name: "Solimo Coffee Beans 2 kg", country:"Columbia", price:"10.73$", imgUrl:"./img/card_1.jpg", bigImgUrl:"./img/aromistico.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", key:"1", countSales: "1000"},
                {name: "AROMISTICO Coffee 1 kg", country:"Brazil", price:"6.99$", imgUrl:"./img/card_3.jpg", bigImgUrl:"./img/aromistico.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", key:"2", countSales: "5"},
                {name: "AROMISTICO Coffee 1 kg", country:"Brazil", price:"6.99$", imgUrl:"./img/card_3.jpg", bigImgUrl:"./img/aromistico.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", key:"3", countSales: "568"},
                {name: "AROMISTICO Coffee 1 kg", country:"Brazil", price:"6.99$", imgUrl:"./img/card_3.jpg", bigImgUrl:"./img/aromistico.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", key:"4", countSales: "45"},
                {name: "AROMISTICO Coffee 1 kg", country:"Brazil", price:"6.99$", imgUrl:"./img/card_3.jpg", bigImgUrl:"./img/aromistico.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", key:"5", countSales: "7"},
                {name: "AROMISTICO Coffee 1 kg", country:"Brazil", price:"6.99$", imgUrl:"./img/card_3.jpg", bigImgUrl:"./img/aromistico.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", key:"6", countSales: "328"},
                {name: "AROMISTICO Coffee 1 kg", country:"Brazil", price:"6.99$", imgUrl:"./img/card_3.jpg", bigImgUrl:"./img/aromistico.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", key:"7", countSales: "56"},
                {name: "Presto Coffee Beans 1 kg", country:"Kenya", price:"6.99$", imgUrl:"./img/card_2.jpg", bigImgUrl:"./img/aromistico.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", key:"8", countSales: "896"},
                {name: "AROMISTICO Coffee 1 kg", country:"Brazil", price:"6.99$", imgUrl:"./img/card_3.jpg", bigImgUrl:"./img/aromistico.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", key:"9", countSales: "43"},   
            ],
            page: '',
        }
    }

    changePage = (pageLink) => {
        if (pageLink === 'home') {
            this.setState({page: <HomePage changePage={this.changePage} data={this.state.data} showCard={this.showCard}/>})
        }  
        if (pageLink === 'our') {
            this.setState({page: <OurPage changePage={this.changePage} data={this.state.data} showCard={this.showCard} fieldOrCard='field'/> })
        }  
        if (pageLink === 'for_your') {
            this.setState({page: <ForYourPleaseure changePage={this.changePage} showCard={this.showCard} data={this.state.data} fieldOrCard='field'/>})
        }
    }

    showCard = (target, cardData) => {
        this.setState({page: <OurPage changePage={this.changePage} data={this.state.data} cardData={cardData} fieldOrCard='card'/> })
    }

    componentDidMount() {       
            this.setState({page: <HomePage changePage={this.changePage} data={this.state.data} showCard={this.showCard}/>});
    }

    render () {    
        
        return (
            <div>
                {this.state.page}
                <Footer changePage={this.changePage}/>   
            </div>
        );
    }
}

export default App;
