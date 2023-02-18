import './our-best.scss';

import Card from '../card/card';

function OurBest() {
    return (
        <section className="our-best">
            <div className="container">
                <h2 className="our-best__subtitle subtitle">Our best</h2>
                <div className="our-best__card-wrapper">
                    <Card 
                        name="Solimo Coffee Beans 2 kg"
                        price="10.73$"
                        modClass='our-best'
                        imgUrl="../../../img/card_1.jpg"
                    />
                     <Card 
                        name="Presto Coffee Beans 1 kg"
                        price="15.99$"
                        modClass='our-best'
                        imgUrl="../../../img/card_2.jpg"
                    />
                     <Card 
                        name="AROMISTICO Coffee 1 kg"
                        price="6.99$"
                        modClass='our-best'
                        imgUrl="../../../img/card_3.jpg"
                    />
                </div>
            </div>
       </section>
    );
}

export default OurBest;