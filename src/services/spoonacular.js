const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com';

export const spoonacularApi = {
    getRandomRecipes: async (number = 10) => {
        const res = await fetch(
            `${BASE_URL}/recipes/random?number=${number}&apiKey=${API_KEY}`
        );
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
    },

    searchRecipes: async (query, number = 12) => {
        const res = await fetch(
            `${BASE_URL}/recipes/complexSearch?query=${query}&number=${number}&addRecipeInformation=true&apiKey=${API_KEY}`
        )
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
    },

    getRecipeById: async (id) => {
        const res = await fetch(
            `${BASE_URL}/recipes/${id}/information?includeNutrition=true&apiKey=${API_KEY}`
        );
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
    },

        getSimilarRecipes: async (id) => {
            const res = await fetch(
                `${BASE_URL}/recipes/${id}/similar?number=4&apiKey=${API_KEY}`
            )
            if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
        }
};