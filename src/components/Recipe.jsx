import { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'
import { spoonacularApi } from '../services/spoonacular'
import './Recipe.style.scss'

export default function Recipe() {
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                // Проверяем кэш
                const cached = localStorage.getItem('randomRecipes')
                if (cached) {
                    setRecipes(JSON.parse(cached))
                    setLoading(false)
                    return // выходим, запрос не делаем
                }

                // Кэша нет — делаем запрос
                const data = await spoonacularApi.getRandomRecipes(9)
                setRecipes(data.recipes || [])

                // Сохраняем в кэш
                localStorage.setItem('randomRecipes', JSON.stringify(data.recipes))
            } catch (error) {
                console.error('Ошибка:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchRecipes()
    }, [])

    return(
        <section className='recipe'>
            <h2>Simple and tasty recipes</h2>
            <p>We've curated the finest simple recipes for you — fast to make, consistently delicious, and filling
                your home with comfort and irresistible aromas.
            </p>
            {loading ? (
                <div className="recipe-loading">Loading recipes...</div>
            ) : (
                <div className='recipe-grid'>
                    {recipes.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            )}
        </section>
    )
}