import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
	name: "favorite",
	initialState: {
		routeFavorite: JSON.parse(localStorage.getItem("FavouriteCount")) || [],
	},
	reducers: {
		increaseFavorite(state, { payload }) {
			state.routeFavorite.push(payload);
		},
		decreaseFavorite(state, { payload }) {
			state.routeFavorite = state.routeFavorite.filter(
				(el) => el.article !== payload.article
			);
		},
	},
});

export const { increaseFavorite, decreaseFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
