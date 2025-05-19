import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchServices } from '../services/serviceAPI.JS';

// Thunk para obtener servicios asíncrono
export const loadServices = createAsyncThunk('services/loadServices', async () => {
  const data = await fetchServices();
  return data;
});

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    items: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(loadServices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default servicesSlice.reducer;
