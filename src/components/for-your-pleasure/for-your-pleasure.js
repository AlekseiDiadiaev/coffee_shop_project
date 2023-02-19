import HeaderSecond from '../header-second/header-second';
import AboutOur from '../about-our/about-our';
import CardField from '../card-field/card-field';

function ForYourPleaseure ({changePage, data, fieldOrCard, showCard}) {
    
    return (
        <div>
            <HeaderSecond changePage={changePage} bgselector='_for-your-pleasure'/> 
            <main>  
                <AboutOur 
                    urlImg='./img/cup_steams.jpg'
                    title='About our goods'
                    fieldOrCard={fieldOrCard}
                /> 
                <CardField data={data} showCard={showCard}/>
            </main>
        </div>
    );
  }
  
  export default ForYourPleaseure;