import './footer.scss';

import CoffeeIcon from '../coffee-icon/coffee-icon';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer__nav nav">
                    <a href="./index.html" className="nav__ico">
                        <img src="./ico/nav_coffee_black.svg" alt="icon coffee"/>
                    </a>
                    <a href="./index.html" className="nav__item">Coffee house</a>
                    <a href="./our_coffee.html" className="nav__item">Our coffee</a>
                    <a href="./for-your-pleasure.html" className="nav__item">For your pleasure</a>
                </nav>
                <CoffeeIcon modClass='footer' imgUrl="./ico/coffee_black.svg"/>
            </div>
        </footer>
    );
}

export default Footer;