import './for-your-pleasure.scss';

import HeaderSecond from '../header-second/header-second';
import CoffeeIcon from '../coffee-icon/coffee-icon';
import icoBlack from '../../resources/ico/coffee_black.svg'
import imgCup from '../../resources/img/cup_steams.jpg';

function ForYourPleasure ({ data, fieldOrCard, showCard}) {
    
    return (
        <div>
            <HeaderSecond title='For your pleasure' bgselector='_for-your-pleasure'/> 
            <main>  
            <section className="for-your-pleasure">
                <div className="container">
                    {<div className="for-your-pleasure__img">
                        <img src={imgCup} alt="coffee"/>
                    </div>}
                    <div className="for-your-pleasure__description">
                        <h2 className="for-your-pleasure__subtitle subtitle">Сoffee making technology</h2>
                            <CoffeeIcon modClass='about-our' imgUrl={icoBlack}/>
                        <div className="for-your-pleasure__content">
                            Want to make the perfect cup of coffee every time? Follow these simple steps to achieve the best results.
                            <br/><br/>
                            <b>Step 1:</b> Choose the right beans
                            Choosing high-quality coffee beans is the first and most important step in creating a great cup of coffee. Look for freshly roasted beans that have a rich aroma and no visible defects or signs of damage. Select beans that match your taste preferences, whether that's a light, medium or dark roast.
                            <br/><br/>
                            <b>Step 2:</b>Grind the beans
                            Grinding the beans just before brewing is necessary to ensure maximum freshness and flavor. Use a conical burr grinder to grind the beans to the desired grind size depending on your preferred brewing method. Use a medium grind for a drip coffee maker and a coarser grind for a French press.
                            <br/><br/>
                            <b>Step 3:</b> Measure the coffee
                            The recommended amount of coffee is usually two tablespoons of coffee for every six ounces of water. However, you can adjust the amount of coffee to your personal taste preferences. Be sure to measure the coffee accurately to avoid an overly bitter or weak cup of coffee.
                            <br/><br/>
                            <b>Step 4:</b> Heat the water
                            The ideal temperature for brewing coffee is between 195 and 205 degrees Fahrenheit. Bring the water to a boil and then let it cool for a minute before using it to brew coffee. If the water is too hot, it can lead to over-extraction of the coffee and a bitter taste.
                            <br/><br/>
                            <b>Step 5:</b> Brew the coffee
                            There are several brewing methods, including drip coffee makers, French presses, pour-over, and more. Follow the instructions for your chosen brewing method and enjoy the perfect cup of coffee every time.
                        </div>
                    </div>
                </div>     
            </section>             
            </main>
        </div>
    );
  }
  
  export default ForYourPleasure;