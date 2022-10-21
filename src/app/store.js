import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import favoritesReducer from '../features/favorites/favoritesSlice'

export const store = configureStore({
    reducer: {
        search: searchReducer,
        favorites: favoritesReducer
    },
});