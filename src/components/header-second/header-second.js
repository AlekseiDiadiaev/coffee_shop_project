import './header-second.scss';

import Nav from '../nav/nav';

function HeaderSecond({changePage, bgselector}) {
    const clazz = `header-second header-second${bgselector}`
	return (
    <header className={clazz}>
        <div className="container">
            <Nav modClassName='header-second' changePage={changePage} imgUrl="./ico/nav_coffee.svg"/>
            <h1 className="header-second__title title">
                Our Coffee
            </h1>
        </div>
    </header>  
    
	);
}

export default HeaderSecond;
