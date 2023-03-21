import './header-main.scss';

import Nav from '../nav/nav';
import CoffeeIcon from '../coffee-icon/coffee-icon'
import navIcoWhite from '../../resources/ico/nav_coffee.svg'
import icoWhite from '../../resources/ico/coffee_white.svg'
import { Link } from 'react-router-dom'
function HeaderMain() {
	return (
		<header className="header-main" >
			<div className="container">
				<Nav modClass='header-main' imgUrl={navIcoWhite}/>
				<h1 className="header-main__title title">
					Everything You Love About Coffee
				</h1>
				<CoffeeIcon modClass='header-main' imgUrl={icoWhite}/>
				<h3 className="header-main__subtitle">
					We makes every day full of energy and taste <br/>
					Want to try our beans?
				</h3>
				<Link to='/coffee_shop_project/our_page'>
					<button className="header-main__btn-more">More</button>
				</Link>
			</div>
		</header>
	);
}

export default HeaderMain;
