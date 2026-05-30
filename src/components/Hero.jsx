import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUtensils, faPlay } from '@fortawesome/free-solid-svg-icons';
import './Hero.style.scss'

export default function Hero() {
    return(
        <div className='hero'>
            
            <div className="hero-left">
                <img className='hero-badge' src="src/assets/hero-Badge.svg" alt="" />
                <div className="hero-left-logo"> 
                    <img src="/src/assets/hero-left-logo.svg" alt="" /> 
                    <p>Hot Recipes</p>
                </div>
                <h1>Spicy delicious <br /> chicken wings</h1>
                <p>Crispy chicken wings coated in a bold, spicy marinade with garlic, paprika, and a hint of smokiness. <br />
                 Perfect for game nights, parties, or whenever you crave something hot and flavorful.</p>
                 <div className="hero-left-times">
                    <div><FontAwesomeIcon icon={faClock} /> 30 Minutes</div>
                    <div><FontAwesomeIcon icon={faUtensils} />Chicken</div>
                 </div>
                 <div className='hero-left-com'>
                    <div className='hero-left-coment'>
                        <img className='hero-left-com-img' src='src/assets/icon-com-hero.svg'>

                        </img>
                        <div className='hero-left-com-text'>
                            <h4>John Smith</h4>
                            <p>15 March 2022</p>
                        </div>
                    </div>
                    <button>View Recipes <span><FontAwesomeIcon icon={faPlay} /></span></button>
                 </div>
            </div>

            <div className="hero-right">

            </div>
        </div>
    )
}