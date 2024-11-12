import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies } from '../../api/tmdbApi'

// fetchMovies => PosterSlider.jsx
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ category, page }) => {
   const response = await getMovies(category, page)
   return response.data.results
})

const moviesSlice = createSlice({
   name: 'movies',
   initialState: {
      loading: false, // 로딩 여부
      movies: [], // 영화 정보
      movieDetails: null, // 영화 상세 정보
      movieCredtis: null, // 출연 배우 정보
      error: null, // 에러 메세지
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true //로딩 중
            state.error = null
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false //로딩 완료
            // 페이지가 1일 때
            if (action.meta.arg.page === 1) {
               state.movies = action.payload
            } else {
               // 페이지가 2 이상일 때 기존데이터 + 새로운 데이터로 state 업데이트 (더보기 버튼)
               state.movies = [...state.movies, ...action.payload]
            }
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message // 에러발생시 에러메세지 전달
         })
   },
})

export default moviesSlice.reducer
