import HeaderSecond from '../header-second/header-second';
import AboutOur from '../about-our/about-our';
import FilterPanel from '../filter-panel/filter-panel';
import CardField from '../card-field/card-field';
import { Component } from 'react';

class OurPage extends Component   {
    constructor (props) {
        super(props)
        this.state = {
            data: [...this.props.data]
        }
    }

    search = (str) => {
        this.setState({data: this.props.data.filter(item => {
            return item.name.toLowerCase().includes(str.toLowerCase()) ||
                   item.country.toLowerCase().includes(str.toLowerCase())
        })})
    }

    filter = (country) => {
        this.setState({
            data: this.props.data.filter(item => item.country === country)
        })
    }
    render() {
        const {changePage, fieldOrCard, cardData, showCard} = this.props;
        const {data} = this.state
        let currentPage;
        
        if (fieldOrCard === 'field'){
            currentPage = (
            <main>    
                <AboutOur 
                    urlImg='./img/women_drink.jpg'
                    title='About our beans'
                    fieldOrCard={fieldOrCard}
                /> 
                <FilterPanel search={this.search} filter={this.filter}/>
                <CardField data={data} showCard={showCard}/>
            </main>);
        } if (fieldOrCard === 'card'){
            currentPage = (
            <main>    
                <AboutOur 
                    cardData={cardData}
                    urlImg={cardData.bigImgUrl}
                    title={cardData.name}
                    fieldOrCard={fieldOrCard}
                /> 
            </main>);
        }

        return (
            <div>
                <HeaderSecond changePage={changePage} bgselector=''/> 
                {currentPage}
            </div>
        );
    }
}   

  export default OurPage;