import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    favourites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
    appState: 'ok',
}


//Check if image already stored in state
function isAdded(state, id) {
    return state.some(image => image.id === id);
}

//Insert into localStorage
const toLocalStorage = (image) => {
    localStorage.setItem('favorites', image)
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers:{
        addFavorite(state, action) {
            state.appState = 'loading';
            
            if(isAdded(state.favourites, action.payload.id)) {
                return state.appState = 'ok';
            } else {
                state.favourites = [...state.favourites, action.payload];
                toLocalStorage(JSON.stringify(action.payload));
                return state.appState = 'ok';
            }
        },
    },
})

export const { addFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;