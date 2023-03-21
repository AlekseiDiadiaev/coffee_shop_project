import HeaderSecond from '../header-second/header-second';
import AboutOur from '../about-our/about-our';
import FilterPanel from '../filter-panel/filter-panel';
import CardField from '../card-field/card-field';
import { Component } from 'react';
import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";

import imgWomenDrink from '../../resources/img/women_drink.jpg'

class OurPage extends Component   {
    constructor (props) {
        super(props)
        // this.id = this.props.match.params;
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
        
        const {fieldOrCard} = this.props;
        
        const {data} = this.state
        let currentPage;
        
        if (fieldOrCard === 'field'){
            currentPage = (
            <main>    
                <AboutOur 
                    urlImg={imgWomenDrink}
                    title='About our beans'
                    fieldOrCard={fieldOrCard}
                /> 
                <FilterPanel search={this.search} filter={this.filter}/>
                <CardField data={data}/>
            </main>);
        } if (fieldOrCard === 'card'){
            const {id} = this.props.router.params;
            const cardData = data.find(item => item.id === id);
            console.log(cardData)
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
                <HeaderSecond bgselector='' title='Our coffee'/> 
                {currentPage}
            </div>
        );
    }
}   

export default withRouter(OurPage);

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
            {...props}
            router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}