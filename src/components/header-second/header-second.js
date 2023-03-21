import './header-second.scss';

import Nav from '../nav/nav';
import navIco from '../../resources/ico/nav_coffee.svg';
function HeaderSecond({ bgselector, title}) {
    const clazz = `header-second header-second${bgselector}`
	return (
    <header className={clazz}>
        <div className="container">
            <Nav modClass='header-second' imgUrl={navIco}/>
            <h1 className="header-second__title title">
                {title}
            </h1>
        </div>
    </header>  
    
	);
}

export default HeaderSecond;
