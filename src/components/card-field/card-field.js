import './card-field.scss';

import Card from '../card/card';


function CardField ({data}) {
    const countCards = data.length;
    const cards = [];
    for(let i = 0; i < countCards; i++){
        cards.push(<Card 
            name={data[i]['name']} 
            price={data[i]['price']} 
            modClass='card-field'
            imgUrl={data[i]['imgUrl']} 
            key={data[i]['id']} 
            bigImgUrl={data[i]['bigImgUrl']} 
            country={data[i]['country']} 
            description={data[i]['description']}
            id={data[i]['id']} 
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