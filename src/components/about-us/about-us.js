
import './about-us.scss';

function AboutUs({inlineStyle}) {
    return (
        <section className="about-us" style={inlineStyle}>
            <div className="container">
                <h2 className="about-us__subtitle subtitle">About Us</h2>
                <div className="about-us__icon coffee-icon">
                    <img src="./ico/coffee_black.svg" alt="icon coffee" ></img>
                </div>
                <p className="about-us__content">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    <br/><br/>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </p>
            </div>
        </section>
    );
}

export default AboutUs;