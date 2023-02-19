
import './card.scss';

function Card(props) {
    const {name, country, price, imgUrl, modClass, showCard} = props;
    const clazz = `${modClass}__card card`
   
    function onShowCard (e) {     
         showCard(e.currentTarget, props)     
    }

    return (
        <div className={clazz}  onClick={onShowCard}>
            <img src={imgUrl} alt="card" className="card__img"/>
            <div className="card__name">{name}</div>
            <div className="card__country">{country}</div>
            <div className="card__price">{price}</div>      
        </div>
    );
}

export default Card;