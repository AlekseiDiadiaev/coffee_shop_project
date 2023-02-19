import './footer.scss';

import CoffeeIcon from '../coffee-icon/coffee-icon';
import Nav from '../nav/nav';
function Footer({changePage}) {
    return (
        <footer className="footer">
            <div className="container">
                <Nav changePage={changePage} modClass="footer" imgUrl="./ico/nav_coffee_black.svg"/>
                <CoffeeIcon modClass='footer' imgUrl="./ico/coffee_black.svg"/>
            </div>
        </footer>
    );
}

export default Footer;