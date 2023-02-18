import "./coffee-icon.scss";

function CoffeeIcon({modClass, imgUrl}) {
    const clazz = `${modClass}__coffee-icon coffee-icon`
    return (
    <div className={clazz}>
        <img src={imgUrl} alt="icon coffee" ></img>
    </div>
    );
  }
  
export default CoffeeIcon;
  