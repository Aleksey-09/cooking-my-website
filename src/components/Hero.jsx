import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUtensils } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    return(
        <div>
            <div className="hero-left">
                <div className="hero-left-logo"> 
                    <img src="" alt="" /> 
                    Hot Recipes
                </div>
                <h1>Spicy delicious <br /> chicken wings</h1>
                <p>Crispy chicken wings coated in a bold, spicy marinade with garlic, paprika, and a hint of smokiness. <br />
                 Perfect for game nights, parties, or whenever you crave something hot and flavorful.</p>
                 <div className="hero-left-times">
                    <div><FontAwesomeIcon icon={faClock} /> 30 Minutes</div>
                    <div><FontAwesomeIcon icon={faUtensils} />Chicken</div>
                 </div>
            </div>

            <div className="hero-right">

            </div>
        </div>
    )
}