
import './nav.scss';
import { NavLink, Link } from 'react-router-dom'

function Nav({inlineStyle, modClass, imgUrl}) {
  const clazz = `${modClass}__nav nav`;

  function activeStyle({isActive}) {
    return isActive ? "nav__item nav__item_active" : "nav__item";
  }

  return (
        <nav className={clazz} style={inlineStyle}>
            <Link to="/coffee_shop_project" className="nav__ico">
                <img src={imgUrl} alt="icon coffee"/>
            </Link>
            <NavLink end to="/coffee_shop_project" className={activeStyle} >Coffee house</NavLink>
            <NavLink to="/coffee_shop_project/our_page" className={activeStyle}>Our coffee</NavLink>
            <NavLink end to="/coffee_shop_project/for_your" className={activeStyle}>For your pleasure</NavLink>
        </nav>
  );
}

export default Nav;