import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUtensils, faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import { spoonacularApi } from '../services/spoonacular';
import { getfoodImage } from '../services/pexels';
import './Hero.style.scss';

export default function Hero() {
    const [recipes, setRecipes] = useState([]);
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRandomRecipes = async () => {
            try {
                // Проверяем кэш рецептов
                const cachedRecipes = localStorage.getItem('heroRecipes')
                if (cachedRecipes) {
                    setRecipes(JSON.parse(cachedRecipes))
                    setLoading(false)
                    return // выходим, запрос не делаем
                }

                // Кэша нет — делаем запрос
                const data = await spoonacularApi.getRandomRecipes(10);
                setRecipes(data.recipes || []);

                // Сохраняем в кэш
                localStorage.setItem('heroRecipes', JSON.stringify(data.recipes))
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

        const loadAllImages = async () => {
            // Проверяем кэш картинок
            const cachedImages = localStorage.getItem('heroImages')
            if (cachedImages) {
                setImages(JSON.parse(cachedImages))
                return // выходим, запрос не делаем
            }

            // Кэша нет — загружаем все картинки
            const imgs = await Promise.all(
                recipes.map(r => getfoodImage(r.title))
            );
            setImages(imgs);

            // Сохраняем картинки в кэш
            localStorage.setItem('heroImages', JSON.stringify(imgs))
        };

        loadAllImages();
    }, [recipes]);

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
    const heroImage = images[currentIndex] || current.image || '';

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