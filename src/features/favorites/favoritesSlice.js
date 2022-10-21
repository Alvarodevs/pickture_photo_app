import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
    status: 'ok',
}


export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.status = 'loading';
            if ([...state.favorites].some(image => image.id === action.payload.id)) {
                state.status = 'ok';
            } else {
                state.favorites = [...state.favorites, action.payload];
                localStorage.setItem('favorites', JSON.stringify(state.favorites));
                state.status = 'ok';
            }
        },
        deleteFavorite(state, action) {
            state.status = 'loading';
            state.favorites = state.favorites.filter(image => image.id !== action.payload)
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
            state.status = 'ok';
        }
    },
})

export const selectFavs = (state) => state.favorites.favorites;
export const selectAppStateFavs = (state) => state.favorites.status;

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;