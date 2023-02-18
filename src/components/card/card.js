
import './card.scss';

function Card({name, country, price, inlineStyle, imgUrl, modClass}) {
    const clazz = `${modClass}__card card`
    let countryRow = '';
    if(country) {
        countryRow = `<div class="card__country">${country}</div>`
    } 
    return (
        <div className={clazz} style={inlineStyle}>
            <img src={imgUrl} alt="card" className="card__img"/>
            <div className="card__name">{name}</div>
            {countryRow}
            <div className="card__price">{price}</div>      
        </div>
    );
}

export default Card;