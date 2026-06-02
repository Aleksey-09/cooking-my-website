import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUtensils, faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import { spoonacularApi } from '../services/spoonacular';
import { getfoodImage } from '../services/pexels';
import './Hero.style.scss';

export default function Hero() {
    const [recipes, setRecipes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [heroImage, setHeroImage] = useState('');

    useEffect(() => {
        const fetchRandomRecipes = async () => {
            try {
                const data = await spoonacularApi.getRandomRecipes(10);
                setRecipes(data.recipes || []);
            } catch (error) {
                console.error("Ошибка загрузки:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRandomRecipes();
    }, []);

    useEffect(() => {
        if (recipes.length === 0) return;

        const loadImage = async () => {
            const img = await getfoodImage(recipes[currentIndex].title);
            setHeroImage(img);
        };

        loadImage();
    }, [currentIndex, recipes]);

    useEffect(() => {
        if (recipes.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % recipes.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [recipes.length]);

    if (loading || recipes.length === 0) {
        return <div className="hero-loading">Loading delicious recipes...</div>;
    }

    const current = recipes[currentIndex];

    return (
        <section
            className="hero"
            style={{ backgroundImage: heroImage ? `url(${heroImage})` : 'none' }}
        >
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <div className="hero-badge">Hot Recipe</div>

                <h1>{current.title}</h1>

                <p
                    className="hero-description"
                    dangerouslySetInnerHTML={{
                        __html: current.summary ? current.summary.slice(0, 160) + '...' : ''
                    }}
                />

                <div className="hero-meta">
                    <div><FontAwesomeIcon icon={faClock} /> {current.readyInMinutes} Minutes</div>
                    <div><FontAwesomeIcon icon={faUtensils} /> {current.servings} Servings</div>
                </div>

                <div className="hero-buttons">
                    <button className="btn-view">
                        <FontAwesomeIcon icon={faPlay} /> View Recipe
                    </button>
                    <button className="btn-favorite">
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>
            </div>
        </section>
    );
}