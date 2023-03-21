import './footer.scss';
import navIcoBlack from '../../resources/ico/nav_coffee_black.svg'
import icoBlack from '../../resources/ico/coffee_black.svg'

import CoffeeIcon from '../coffee-icon/coffee-icon';
import Nav from '../nav/nav';
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <Nav modClass="footer" imgUrl={navIcoBlack}/>
                <CoffeeIcon modClass='footer' imgUrl={icoBlack}/>
            </div>
        </footer>
    );
}

export default Footer;