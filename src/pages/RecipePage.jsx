import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUtensils, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { spoonacularApi } from '../services/spoonacular'
import Deliciousness from '../components/Deliciousnes'
import Recipe from '../components/Recipe'


export default function RecipePage() {
    const {id} = useParams()
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchRecipe = async () => {
            try  {
                const data = await spoonacularApi.getRecipeById(id)
                setRecipe(data)
                console.log(data)
            } catch {
                console.error('Ошибка:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchRecipe()
    },[id])

    if (loading) return <div>Loading...</div>
    if (!recipe) return <div>Recipe not found</div>

    return (
        <div className="recipe">
            <div className="recipe-logo">
                <h1>{recipe.title}</h1>
                <div className="recipe-icon">
                    <div className="recipe-icon-user">
                        <div className="recipe-icon-user__img">
                            <img src="" alt="" />
                        </div>
                        <div className="recipe-icon-user__info">
                            <h4>John Smith</h4>
                            <p>15 March 2022</p>
                        </div>
                    </div>
                    <div recipe-meta>
                        <p>COOK TIME</p>
                        <div><FontAwesomeIcon icon={faClock} /> {recipe.readyInMinutes} Min</div>
                    </div>
                    <div recipe-meta>
                        <div><FontAwesomeIcon icon={faUtensils} /> {recipe.servings} Servings</div> 
                    </div>
                    <div>
                        <p>Portions</p>
                        {recipe.servings}
                    </div>
                </div>
                <button className="btn-favorite">
                        <FontAwesomeIcon icon={faHeart} />
                </button>
            </div>
            <div className='recipe-main'>
                <div className='recipe-img'>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
                <aside className='recipe-nutrition'>

                </aside>
            </div>
            <div className='recipe-description'>
                {recipe.summary}
            </div>
            <div className='resipe-ingredients'>
                <div className='resipe-ingredients-info'>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <aside>
                    <h3>Other Recipe</h3>

                </aside>
            </div>
            <div className='recipe-preparation'>
                <h3>preparation</h3>
            </div>
            <Deliciousness />
            <Recipe />
        </div>
    )
}