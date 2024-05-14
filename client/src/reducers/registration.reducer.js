import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../configs/API";

const initialState = {
	data: null,
	status: "loading",
	error: null,
	allCustomers: [],
};

export const actionFetchAllCustomers = createAsyncThunk(
	"todos/fetchAllCustomers",
	async () => {
		try {
			const response = await axios.get(`${API_URL}/api/customers`);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
);

export const registerFetchData = createAsyncThunk(
	"register/actionFetchData",
	async (params, { rejectWithValue }) => {
		try {
			const { data } = await axios.post(`${API_URL}/api/customers/`, params);

			return data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const registrationReducer = createSlice({
	name: "register",
	initialState,
	reducers: {
		clearDataRegister(state) {
			localStorage.removeItem("registerData");
		},
	},
	extraReducers: (builder) => {
		builder.addCase(registerFetchData.pending, (state) => {
			state.status = "loading";
			state.data = null;
		});
		builder.addCase(registerFetchData.fulfilled, (state, { payload }) => {
			state.status = "leaded";
			state.data = payload;
			state.error = null;

			localStorage.setItem("registerData", JSON.stringify(payload));
		});
		builder.addCase(registerFetchData.rejected, (state, { payload }) => {
			state.status = "error";
			state.error = payload;
		});

		builder.addCase(actionFetchAllCustomers.pending, (state) => {
			state.status = "loading";
			state.allCustomers = [];
		});
		builder.addCase(actionFetchAllCustomers.fulfilled, (state, { payload }) => {
			state.allCustomers = payload;
			state.status = "leaded";
		});
	},
});

export const { clearDataRegister } = registrationReducer.actions;
export default registrationReducer.reducer;
