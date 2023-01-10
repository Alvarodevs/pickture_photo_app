import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
	status: 'ok',
}

const handleOrder = ({pics, options}) => {
	const picsToSort = [...pics]
	const sorted = picsToSort.sort((a, b) => a.options > b.options ? 1 : -1)
	return options ? sorted : [];
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
		},
		editDescription(state, action) {
			state.favorites = state.favorites.map(image => {
				if (image.id === action.payload.id) {
					image.description = action.payload.description;
				}
				return image
			})
			localStorage.setItem('favorites', JSON.stringify(state.favorites));
		},
		orderBy(state, action) {
			state.favorites = handleOrder(action.payload)
		}
	},
})

export const selectFavs = (state) => state.favorites.favorites;
export const selectAppStateFavs = (state) => state.favorites.status;

export const { addFavorite, deleteFavorite, editDescription, orderBy } = favoritesSlice.actions;

export default favoritesSlice.reducer;