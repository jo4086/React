import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTVs } from '../../api/tmdbApi'

export const fetchTVs = createAsyncThunk('tv/fetchTVs', async (type) => {
   const respones = await getTVs(type)
   return respones.data.results
})

const tvsSlice = createSlice({
   name: 'tvs',
   initialState: {
      loading: false,
      tvs: [],
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchTVs.pending, (state) => {
            state.loading = true
            state.error = null // 새로운 요청 시 에러 초기화
         })
         .addCase(fetchTVs.fulfilled, (state, action) => {
            state.loading = false
            state.tvs = action.payload
         })
         .addCase(fetchTVs.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default tvsSlice.reducer