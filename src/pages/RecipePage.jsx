import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUtensils, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { spoonacularApi } from '../services/spoonacular'
import Deliciousness from '../components/Deliciousnes'
import Recipe from '../components/Recipe'
import './RecipePage.style.scss'


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
    const nutrients = recipe.nutrition.nutrients
    const calories = nutrients.find(n => n.name === 'Calories')?.amount.toFixed(0)
    const protein  = nutrients.find(n => n.name === 'Protein')?.amount.toFixed(0)
    const fat      = nutrients.find(n => n.name === 'Fat')?.amount.toFixed(0)
    const carbs    = nutrients.find(n => n.name === 'Carbohydrates')?.amount.toFixed(0)
    return (
        <div className="recipe">
            <div className="recipe-logo">
                <h1>{recipe.title}</h1>
                <div className="recipe-icon">
                    <div className="recipe-icon-user">
                        <div className="recipe-icon-user__img">
                            <img src="/assets/user-logo.svg" alt="" />
                        </div>
                        <div className="recipe-icon-user__info">
                            <h4>John Smith</h4>
                            <p>15 March 2022</p>
                        </div>
                    </div>
                    <div recipe-meta>
                        <h4>COOK TIME</h4>
                        <div className='recipe-meta-icon'><FontAwesomeIcon icon={faClock} /> {recipe.readyInMinutes} Min</div>
                    </div>
                    <div recipe-meta>
                        <h4>Servings</h4>
                        <div className='recipe-meta-icon'><FontAwesomeIcon icon={faUtensils} /> {recipe.servings} </div> 
                    </div>
                    <button className="btn-favorite">
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    
                </div>
                
                    
                
            </div>
            <div className='recipe-main'>
                <div className='recipe-img'>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
                <aside className='recipe-nutrition'>
                    <h1>Nutrition Information</h1>
                    <div className='nutrition-item'>
                        <div className='nutrition-item-name'>
                            <span>🔥</span>
                            <p>Calories</p>
                        </div>
                        <p>{calories}</p>
                        
                    </div>
                    <div className='nutrition-item'>
                        <div className='nutrition-item-name'>
                            <span>🥩</span>
                            <p>Protein</p>
                        </div>
                        <p>{protein}g</p>
                        
                    </div>
                    <div className='nutrition-item'>
                        <div className='nutrition-item-name'>
                            <span>🧈</span>
                            <p>Fat</p>
                        </div>
                        <p>{fat}g</p>
                        
                    </div>
                    <div className='nutrition-item'>
                        <div className='nutrition-item-name'>
                            <span>🍞</span>
                            <p>Carbs</p>
                        </div>
                        <p>{carbs}g</p>
                        
                    </div>
                </aside>
            </div>
            <div className='recipe-description'>
                <p dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            </div>
            <div className='resipe-ingredients'>
                <div className='resipe-ingredients-info'>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.extendedIngredients.map((ing, index) => (
                            // используем index как key потому что у некоторых ингредиентов одинаковый id
                            <li key={index}>
                                {ing.amount} {ing.unit} — {ing.name}
                            </li>
                        ))}
                    </ul>
                </div>
               
            </div>
            <div className='recipe-preparation'>
               <h3>Preparation</h3>
                {recipe.analyzedInstructions[0]?.steps.map(step => (
                    <div key={step.number} className='recipe-step'>
                        <span className='step-number'>{step.number}</span>
                        <p>{step.step}</p>
                    </div>
                ))}
            </div>
            <Deliciousness />
            <Recipe />
        </div>
    )
}