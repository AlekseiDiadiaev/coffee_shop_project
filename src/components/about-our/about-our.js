
import './about-our.scss';
import CoffeeIcon from '../coffee-icon/coffee-icon';
import icoBlack from '../../resources/ico/coffee_black.svg'

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
                        <CoffeeIcon modClass='about-our' imgUrl={icoBlack}/>
                    <div className="about-our__content">
                    Looking for the perfect cup of coffee? Look no further than our coffee shop! <br/> <br/>
                    Our extensive catalog features a wide selection of premium coffee blends, from rich and bold to smooth and mellow. <br/> <br/>
                    We offer both ground and whole bean options, so you can enjoy the perfect cup of coffee no matter how you like to brew it. <br/><br/>
                    Browse our catalog today and find your new favorite coffee blend!
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
                            <CoffeeIcon modClass='about-it' imgUrl={icoBlack}/>
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