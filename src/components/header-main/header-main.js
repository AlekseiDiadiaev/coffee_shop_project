import './header-main.scss';

import Nav from '../nav/nav';
import CoffeeIcon from '../coffee-icon/coffee-icon'

function HeaderMain({changePage}) {
	return (
		<header className="header-main" >
			<div className="container">
				<Nav modClass='header-main' changePage={changePage} imgUrl="./ico/nav_coffee.svg"/>
				<h1 className="header-main__title title">
					Everything You Love About Coffee
				</h1>
				<CoffeeIcon modClass='header-main' imgUrl="./ico/coffee_white.svg"/>
				<h3 className="header-main__subtitle">
					We makes every day full of energy and taste <br/>
					Want to try our beans?
				</h3>
				<button className="header-main__btn-more" onClick={() => changePage('our')}>More</button>
			</div>
		</header>
	);
}

export default HeaderMain;
