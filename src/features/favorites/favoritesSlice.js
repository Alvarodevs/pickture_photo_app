import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    status: 'ok',
};

//Check if image already stored in state
const isAdded = (state, id) => {
    return state.some(image => image.id === id)
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers:{

        addFavorite(state, action) {
            state.status = 'loading';
            localStorage.setItem("favorites", JSON.stringify(action.payload));
            console.log(state.favorites.some(fav => fav.id === action.payload.id));
            //localStorage.setItem('favorites', action.payload),
            //state.favorites = [...state.favorites, action.payload]
            // if (isAdded(state.favorites, action.payload.id)) {
            //     localStorage.setItem('favorites', action.payload)
            //     //return state.favorites = [...state.favorites, action.payload]
            // }
            state.status = 'ok';
        },

    },
})

export const { addFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;