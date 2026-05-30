import './Categories.style.scss'

export default function Categories() {

    const cards = [
  { id: 1, image: 'src/assets/categories/Breakfast.svg', alt: 'Card 1' },
  { id: 2, image: 'src/assets/categories/vegan.svg', alt: 'Card 2' },
  { id: 3, image: 'src/assets/categories/meat.svg', alt: 'Card 3' },
  { id: 4, image: 'src/assets/categories/dessert.svg', alt: 'Card 4' },
  { id: 5, image: 'src/assets/categories/lunch.svg', alt: 'Card 5' },
  { id: 6, image: 'src/assets/categories/chocolate.svg', alt: 'Card 6' },
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