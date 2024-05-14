import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalPrice: 0,
	routeBasket: JSON.parse(localStorage.getItem("ShoppingCardCount")) || [],
};

export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		addCount(state, { payload }) {
			const cardId = state.routeBasket.find(
				(el) => el.article === payload.article
			);
			if (cardId) {
				cardId.count++;
			} else {
				state.routeBasket.push({ ...payload, count: 1 });
			}
		},
		removeBasket(state, { payload }) {
			const cardId = state.routeBasket.find(
				(el) => el.article === payload.article
			);
			if (cardId.count === 1) {
				return;
			} else {
				cardId.count--;
			}
		},
		increaseBasket(state, { payload }) {
			const cardId = state.routeBasket.find(
				(el) => el.article === payload.article
			);
			if (cardId) {
				alert(`${payload.title} уже добавлен в корзину`);
			} else {
				state.routeBasket.push({ ...payload, count: 1 });
			}
		},
		decreaseBasket(state, { payload }) {
			state.routeBasket = state.routeBasket.filter(
				(el) => el.article !== payload.article
			);
		},
		clearItems(state) {
			state.routeBasket = [];
		},
	},
});

export const {
	increaseBasket,
	decreaseBasket,
	clearItems,
	addCount,
	removeBasket,
} = basketSlice.actions;
export default basketSlice.reducer;
