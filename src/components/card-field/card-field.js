import './card-field.scss';

import Card from '../card/card';


function CardField ({data, showCard}) {
    /* console.log(data) */
    const countCards = data.length < 7 ? data.length : 6;
    const cards = [];
    for(let i = 0; i < countCards; i++){
        cards.push(<Card 
            name={data[i]['name']} 
            price={data[i]['price']} 
            modClass='card-field'
            imgUrl={data[i]['imgUrl']} 
            key={data[i]['key']} 
            bigImgUrl={data[i]['bigImgUrl']} 
            country={data[i]['country']} 
            description={data[i]['description']}
            showCard={showCard} 
        />)
    }
    return (
        <div className="card-field">
            <div className="container">
                {cards}            
            </div>
        </div>
    );
  }
  
  export default CardField;