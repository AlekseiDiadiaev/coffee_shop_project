
import './nav.scss';

function Nav({inlineStyle, modClass}) {
  const clazz = `${modClass}__nav nav`;
  return (
        <nav className={clazz} style={inlineStyle}>
            <a href="/" className="nav__ico">
                <img src="./ico/nav_coffee.svg" alt="icon coffee"/>
            </a>
            <a href="/" className="nav__item">Coffee house</a>
            <a href="/" className="nav__item">Our coffee</a>
            <a href="/" className="nav__item">For your pleasure</a>
        </nav>
  );
}

export default Nav;