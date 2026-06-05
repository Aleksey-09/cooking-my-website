import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUtensils, faHeart } from '@fortawesome/free-solid-svg-icons'
import './RecipeCard.style.scss'

export default function RecipeCard({ recipe }) {
    const [liked, setLiked] = useState(false)

    return( 
        <div className="recipe-card">
            <div className="card-img">
                <img src={recipe.image} alt={recipe.title} />
                <button 
                    className={`like-btn ${liked ? 'active' : ''}`}
                    onClick={() => setLiked(!liked)}
                >
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </div>
            <Link to={`/recipe/${recipe.id}`} className="recipe-info">
                <h3>{recipe.title}</h3>
                <div className="recipe-meta">
                    <div><FontAwesomeIcon icon={faClock} /> {recipe.readyInMinutes} Min</div>
                    <div><FontAwesomeIcon icon={faUtensils} /> {recipe.servings} Servings</div>
                </div>
            </Link>
        </div>
    )
}