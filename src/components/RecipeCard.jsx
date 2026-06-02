import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUtensils, faPlay } from '@fortawesome/free-solid-svg-icons';


export default function RecipeCard({ recipe }) {
    return( 
        <Link  className="recipe-card">
            <div className="card-img">
                <img src={recipe.img} alt="" />
                <img src={recipe.like} alt="" />
            </div>
            <div className="recipe-info">
                <h3>{recipe.title}</h3>
                <div className="recipe-meta">
                    <div><FontAwesomeIcon icon={faClock} /> 30 Minutes</div>
                    <div><FontAwesomeIcon icon={faUtensils} />Chicken</div>
                </div>
            </div>
        </Link>
    )
}