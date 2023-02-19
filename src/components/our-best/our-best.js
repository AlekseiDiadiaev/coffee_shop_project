import './our-best.scss';

import Card from '../card/card';

function OurBest({data, showCard}) {
    const dataSortBySales = [...data].sort((a, b) => b.countSales - a.countSales) 
    const cards = [];

    

    for(let i = 0; i < 3; i++){
        cards.push(<Card 
            name={dataSortBySales[i]['name']} 
            price={dataSortBySales[i]['price']} 
            modClass='our-best'
            imgUrl={dataSortBySales[i]['imgUrl']} 
            bigImgUrl={dataSortBySales[i]['bigImgUrl']} 
            description={dataSortBySales[i]['description']} 
            key={dataSortBySales[i]['key']} 
            country={dataSortBySales[i]['country']}
            showCard={showCard}
        />)
    }
    
    return (
        <section className="our-best">
            <div className="container">
                <h2 className="our-best__subtitle subtitle">Our best</h2>
                <div className="our-best__card-wrapper">
                    {cards}
                </div>
            </div>
       </section>
    );
}

export default OurBest;