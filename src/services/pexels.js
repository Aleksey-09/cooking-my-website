const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export const getfoodImage = async (query) => {
    const res = await fetch(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
        { headers: { Authorization: API_KEY } }
    );
    const data = await res.json();
    return data.photos?.[0]?.src?.large2x || '';
};