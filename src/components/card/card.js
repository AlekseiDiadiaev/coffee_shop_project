
import './card.scss';
import { Link } from "react-router-dom";

function Card(props) {
    const {name, country, price, imgUrl, modClass, id} = props;
    const clazz = `${modClass}__card card`


    return (
        <Link to={`/coffee_shop_project/our_page/${id}`} className={clazz}>
            <img src={imgUrl} alt="card" className="card__img"/>
            <div className="card__name">{name}</div>
            <div className="card__country">{country}</div>
            <div className="card__price">{price}</div>  
        </Link>    
    );
}

export default Card;