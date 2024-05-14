import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../configs/API";

const initialState = {
	user: null,
	status: "idle",
	error: null,
};

export const updateUserInfo = createAsyncThunk(
	"user/updateUserInfo",
	async ({ userId, updatedData }, { rejectWithValue }) => {
		try {
			const response = await axios.put(
				`${API_URL}/api/customers/${userId}`,
				updatedData
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchUserInfo = createAsyncThunk(
	"user/fetchUserInfo",
	async (customerId, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${API_URL}/api/customer/${customerId}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const userReducer = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(updateUserInfo.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(updateUserInfo.fulfilled, (state, { payload }) => {
				state.status = "succeeded";
				state.user = payload;
			})
			.addCase(updateUserInfo.rejected, (state, { payload }) => {
				state.status = "failed";
				state.error = payload;
			})
			.addCase(fetchUserInfo.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchUserInfo.fulfilled, (state, { payload }) => {
				state.status = "succeeded";
				state.user = payload;
			})
			.addCase(fetchUserInfo.rejected, (state, { payload }) => {
				state.status = "failed";
				state.error = payload;
			});
	},
});

export default userReducer.reducer;
