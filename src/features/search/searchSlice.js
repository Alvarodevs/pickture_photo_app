import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getImages } from '../../services/unsplash';

const initialState = {
    pictures: [],
    status: 'ok',
};

//Async thunk to update state with api call
export const searchAsync = createAsyncThunk(
    'search/getImages',
    async (query) => {
        return await getImages(query);
    }
);


export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchAsync.pending, (state) => {
                state.status = 'loading';        
            })
            .addCase(searchAsync.fulfilled, (state,action) => {
                console.log('payload', action)
                state.status = 'ok';
                state.pictures = action.payload;
            })
            .addCase(searchAsync.rejected, (state) => {
                state.status = 'ko'
            })
    }
});

export const { loadImages } = searchSlice.actions;

//Function for selecting images from state
export const selectImages = (state) => state.search.pictures;


export default searchSlice.reducer;