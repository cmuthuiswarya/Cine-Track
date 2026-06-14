const BASE = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

async function request(path, params = {}) {
    if (!API_KEY) throw new Error('VITE_TMDB_API_KEY is not set in environment');
    const url = new URL(BASE + path);
    const search = { api_key: API_KEY, language: 'en-US', ...params };
    Object.keys(search).forEach((k) => url.searchParams.append(k, search[k]));

    const res = await fetch(url);
    if (!res.ok) throw new Error(`TMDB request failed: ${res.status}`);
    return res.json();
}

export async function fetchTrending() {
    const data = await request('/trending/movie/day');
    return data.results || [];
}

export async function fetchPopular(page = 1) {
    const data = await request('/movie/popular', { page });
    return data.results || [];
}

export async function fetchTopRated(page = 1) {
    const data = await request('/movie/top_rated', { page });
    return data.results || [];
}

export async function fetchUpcoming(page = 1) {
    const data = await request('/movie/upcoming', { page });
    return data.results || [];
}

export async function searchMovies(query, page = 1) {
    if (!query) return [];
    const data = await request('/search/movie', { query, page, include_adult: false });
    return data.results || [];
}

export const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

export default {
    fetchTrending,
    fetchPopular,
    fetchTopRated,
    fetchUpcoming,
    searchMovies,
    IMAGE_BASE,
};
