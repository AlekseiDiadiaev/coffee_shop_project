
import './about-us.scss';
import CoffeeIcon from '../coffee-icon/coffee-icon';
import icoBlack from '../../resources/ico/coffee_black.svg'

function AboutUs({inlineStyle}) {
    return (
        <section className="about-us" style={inlineStyle}>
            <div className="container">
                <h2 className="about-us__subtitle subtitle">About Us</h2>
                <CoffeeIcon modClass='about-us' imgUrl={icoBlack}/>
                <p className="about-us__content">
                        Welcome to our coffee shop! We are passionate about serving high-quality coffee and creating a warm and inviting atmosphere for our customers. Our team is dedicated to providing a top-notch coffee experience that will make you want to come back for more.
                        <br/><br/>
                        Our coffee is sourced from the finest coffee beans, and we take great care in preparing each cup to perfection. Our menu includes a variety of drinks, including classic favorites and unique blends that are exclusive to our shop. We also offer a selection of pastries and snacks to complement your drink of choice.
                        <br/><br/>
                        Our shop is a cozy and comfortable space that's perfect for meeting up with friends, studying, or just taking a break from your day. We pride ourselves on providing excellent customer service and ensuring that each person who walks through our doors feels welcome and valued.
                        <br/><br/>
                        Thank you for choosing our coffee shop, and we look forward to serving you soon!   
                </p>
            </div>
        </section>
    );
}

export default AboutUs;