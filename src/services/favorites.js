const FAVORITES_KEY = 'cinetrack_favorites';

export function getFavorites() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(FAVORITES_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((movie) => movie && typeof movie === 'object' && movie.id);
  } catch (error) {
    console.error('Failed to read favorites from localStorage', error);
    return [];
  }
}

export function saveFavorites(favorites = []) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Failed to save favorites to localStorage', error);
  }
}

export function addFavorite(movie) {
  if (!movie || !movie.id) return getFavorites();
  const favorites = getFavorites();
  if (favorites.some((item) => Number(item.id) === Number(movie.id))) {
    return favorites;
  }

  const nextFavorite = {
    id: movie.id,
    title: movie.title || movie.name || 'Untitled',
    release_date: movie.release_date || movie.first_air_date || '',
    poster_path: movie.poster_path || '',
    vote_average: movie.vote_average ?? null,
    genres: Array.isArray(movie.genres) ? movie.genres.map((genre) => genre.name) : movie.genres || [],
    overview: movie.overview || '',
  };

  const next = [...favorites, nextFavorite];
  saveFavorites(next);
  return next;
}

export function removeFavorite(movieId) {
  const favorites = getFavorites();
  const next = favorites.filter((movie) => Number(movie.id) !== Number(movieId));
  saveFavorites(next);
  return next;
}

export function isFavorite(movieId) {
  if (!movieId) return false;
  const favorites = getFavorites();
  return favorites.some((movie) => Number(movie.id) === Number(movieId));
}
