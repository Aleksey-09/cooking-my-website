import './Categories.style.scss'

export default function Categories() {

    const cards = [
  { id: 1, image: '/assets/categories/Breakfast.svg', alt: 'Card 1' },
  { id: 2, image: '/assets/categories/vegan.svg', alt: 'Card 2' },
  { id: 3, image: '/assets/categories/meat.svg', alt: 'Card 3' },
  { id: 4, image: '/assets/categories/dessert.svg', alt: 'Card 4' },
  { id: 5, image: '/assets/categories/lunch.svg', alt: 'Card 5' },
  { id: 6, image: '/assets/categories/chocolate.svg', alt: 'Card 6' },
];

   return (
        <div className="categories">
            <div className="categories-logo">
                <h1>Categories</h1>
                <button>View All Categories</button>
            </div>

            <div className="categories-cards">
                {cards.map((card) => (
                    <div key={card.id} className="categories-card">
                        <img 
                            src={card.image} 
                            alt={card.alt} 
                            className="category-image"
                        />
                        
                    </div>
                ))}
            </div>
        </div>
    );
}