
import './about-our.scss';
import CoffeeIcon from '../coffee-icon/coffee-icon';

function AboutOur({urlImg, title, fieldOrCard, cardData}) {
    let description;
    if(fieldOrCard === 'field') {
        description = (
            <div className="container">
                
                <div className="about-our__img">
                    <img src={urlImg} alt="coffee"/>
                </div>
                <div className="about-our__description">
                    <h2 className="about-our__subtitle subtitle">{title}</h2>
                        <CoffeeIcon modClass='about-our' imgUrl="./ico/coffee_black.svg"/>
                    <div className="about-our__content">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                         <br/><br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        <br/>
                        so questions. 
                        <br/>
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        <br/>
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        <br/>
                        is song that held help face.
                    </div>
                </div>
            </div>
        );
    } if (fieldOrCard === 'card') {
        description = (
            <div className="container">
                <div className="about-it__img">
                    <img src={urlImg} alt="women drink coffee"/>
                </div>
                <div className="about-it__description-wrapper">
                    <div className="about-it">
                        <h2 className="about-it__subtitle subtitle">{title}</h2>
                            <CoffeeIcon modClass='about-it' imgUrl="./ico/coffee_black.svg"/>
                        <div className="about-it__content">
                            <p className="about-it__country"><b>Country:</b> {cardData.country}</p>
                            <p className="about-it__discription"><b>Description:</b>Description: {cardData.description}</p>
                            <p className="about-it__price"><b>Price:</b><span> {cardData.price}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <section className="about-our">
            {description}           
        </section>
    );
}

export default AboutOur;