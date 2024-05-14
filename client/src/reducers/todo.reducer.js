import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../helpers/sendRequest";
import { API_URL } from "../configs/API";
import axios from "axios";

const initialState = {
	todos: [],
	allTodos: [],
	isLoading: true,
};

export const actionFetchCards = createAsyncThunk(
	"cards/fetchCards",
	async ({ category, limit, page, search }) => {
		let query = `?_limit=${limit}&_page=${page}`;
		if (category) query += `&category=${category}`;
		if (search) query += `&search=${search}`;

		const response = await sendRequest(`${API_URL}/api/products${query}`);
		return response;
	}
);

export const actionFetchAllProducts = createAsyncThunk(
	"todos/fetchAllProducts",
	async () => {
		const response = await sendRequest(`${API_URL}/api/allProducts`);
		return response;
	}
);

export const actionCreateProduct = createAsyncThunk(
	"todos/createProduct",
	async (newProductData) => {
		try {
			const response = await axios.post(
				`${API_URL}/api/products`,
				newProductData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			return response.data;
		} catch (error) {
			console.error("Error creating product:", error);
			throw error;
		}
	}
);

const todoReducer = createSlice({
	name: "todos",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(actionFetchCards.pending, (state) => {
			state.isLoading = true;
			state.todos = [];
		});
		builder.addCase(actionFetchCards.fulfilled, (state, { payload }) => {
			state.todos = payload;
			state.isLoading = false;
		});

		builder.addCase(actionFetchAllProducts.pending, (state) => {
			state.isLoading = true;
			state.allTodos = [];
		});
		builder.addCase(actionFetchAllProducts.fulfilled, (state, { payload }) => {
			state.allTodos = payload;
			state.isLoading = false;
		});

		builder.addCase(actionCreateProduct.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(actionCreateProduct.fulfilled, (state) => {
			state.isLoading = false;
		});
		builder.addCase(actionCreateProduct.rejected, (state) => {
			state.isLoading = false;
		});
	},
});

export default todoReducer.reducer;
