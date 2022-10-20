import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favImages: [],
    status: 'ok',
};

//Check if image already stored in state
const isAdded = (state, id) => {
    return state.some(image => image.id === id)
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
            state.status = 'loading';
            state.favImages.push(action.payload);
            localStorage.setItem('favorites', JSON.stringify(action.payload))
            //console.log(isAdded(state.favImages, action.payload.id))
            //toLocalStorage(JSON.stringify(action.payload));

            //return isAdded(state.favorites, action.payload.id)
            // state.status = 'loading';
            // localStorage.setItem("favorites", JSON.stringify(action.payload));
            
            //localStorage.setItem('favorites', action.payload),
            //state.favorites = [...state.favorites, action.payload]
            // if (isAdded(state.favorites, action.payload.id)) {
            //     localStorage.setItem('favorites', action.payload)
            //     //return state.favorites = [...state.favorites, action.payload]
            // }
            //state.status = 'ok';
        },

    },
})

export const { addFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;