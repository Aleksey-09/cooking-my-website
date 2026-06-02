import { recipes } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import './Recipe.style.scss'


export default function Recipe() {
    return(
        <section className='recipe'>
            <h2>Simple and tasty recipes</h2>
            <p>We’ve curated the finest simple recipes for you — fast to make, consistently delicious, and filling
                 <br />
             your home with comfort and irresistible aromas.</p>
             <div className='recipe-grid'>
                {recipes.slice(0, 8).map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
             </div>
        </section>
    )
}