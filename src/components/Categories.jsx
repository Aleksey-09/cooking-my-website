import { Link } from 'react-router-dom'
import './Categories.style.scss'

const categories = [
    { id: 1,  name: 'Breakfast',  icon: '🍳', color: '#FFF3E0', query: 'breakfast' },
    { id: 2,  name: 'Vegan',      icon: '🥗', color: '#E8F5E9', query: 'vegan' },
    { id: 3,  name: 'Meat',       icon: '🥩', color: '#FCE4EC', query: 'meat' },
    { id: 4,  name: 'Dessert',    icon: '🍰', color: '#F3E5F5', query: 'dessert' },
    { id: 5,  name: 'Lunch',      icon: '🍜', color: '#E3F2FD', query: 'lunch' },
    { id: 6,  name: 'Chocolate',  icon: '🍫', color: '#EFEBE9', query: 'chocolate' },
    { id: 7,  name: 'Seafood',    icon: '🦐', color: '#E0F7FA', query: 'seafood' },
    { id: 8,  name: 'Soup',       icon: '🍲', color: '#FFF8E1', query: 'soup' },
    { id: 9,  name: 'Pasta',      icon: '🍝', color: '#FBE9E7', query: 'pasta' },
    { id: 10, name: 'Salad',      icon: '🥙', color: '#F1F8E9', query: 'salad' },
    { id: 11, name: 'Pizza',      icon: '🍕', color: '#FFF9C4', query: 'pizza' },
    { id: 12, name: 'Drinks',     icon: '🥤', color: '#E8EAF6', query: 'drinks' },
]

export default function Categories() {
    return (
        <div className="categories">
            <div className="categories-header">
                <h2>Categories</h2>
                <button>View All Categories</button>
            </div>

            <div className="categories-cards">
                {categories.map((cat) => (
                    <Link 
                        to={`/category/${cat.query}`} 
                        key={cat.id} 
                        className="categories-card"
                        style={{ backgroundColor: cat.color }}
                    >
                        <span className="categories-card-icon">{cat.icon}</span>
                        <span className="categories-card-name">{cat.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}