import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUtensils, faHeart } from '@fortawesome/free-solid-svg-icons'
import { spoonacularApi } from '../services/spoonacular'
import './CategoryPage.style.scss'

export default function CategoryPage() {
    // useParams читает динамический параметр из URL
    // если URL = /category/breakfast, то query = 'breakfast'
    const { query } = useParams()

    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)

    // Каждый раз когда меняется query (пользователь перешёл в другую категорию)
    // useEffect запускается заново и загружает новые рецепты
    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true) // включаем загрузку перед запросом
            try {
                const data = await spoonacularApi.searchRecipes(query, 12)
                setRecipes(data.results || [])
            } catch (error) {
                console.error('Ошибка:', error)
            } finally {
                setLoading(false) // выключаем загрузку в любом случае
            }
        }

        fetchRecipes()
    }, [query]) // [query] — зависимость, перезапускаем если query изменился

    return (
        <div className="category-page">
            {/* Заголовок страницы — capitalize делает первую букву заглавной */}
            <h1 className="category-title">
                {query.charAt(0).toUpperCase() + query.slice(1)} Recipes
            </h1>

            {loading ? (
                <div className="category-loading">Loading recipes...</div>
            ) : (
                <div className="category-grid">
                    {recipes.map(recipe => (
                        <div key={recipe.id} className="recipe-card">
                            <div className="recipe-card-img">
                                <img src={recipe.image} alt={recipe.title} />
                                <button className="recipe-card-like">
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                            </div>
                            <div className="recipe-card-info">
                                <h3>{recipe.title}</h3>
                                <div className="recipe-card-meta">
                                    <span>
                                        <FontAwesomeIcon icon={faClock} />
                                        {recipe.readyInMinutes} Min
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faUtensils} />
                                        {recipe.servings} Servings
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}