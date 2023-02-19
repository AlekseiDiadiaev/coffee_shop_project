
import './nav.scss';

function Nav({inlineStyle, modClass, changePage, imgUrl}) {
  const clazz = `${modClass}__nav nav`;

  function onChangePage (e)  {
    e.preventDefault();
    const pageLink = e.target.getAttribute('data-link');
    console.log(pageLink)
    changePage(pageLink);
  } 

  return (
        <nav className={clazz} style={inlineStyle}>
            <a href="/" className="nav__ico" data-link="home" onClick={(e) => onChangePage(e)}>
                <img src={imgUrl} data-link="home" alt="icon coffee"/>
            </a>
            <a href="/" className="nav__item" data-link="home" onClick={(e) => onChangePage(e)}>Coffee house</a>
            <a href="/" className="nav__item" data-link="our" onClick={(e) => onChangePage(e)}>Our coffee</a>
            <a href="/" className="nav__item" data-link="for_your" onClick={(e) => onChangePage(e)}>For your pleasure</a>
        </nav>
  );
}

export default Nav;