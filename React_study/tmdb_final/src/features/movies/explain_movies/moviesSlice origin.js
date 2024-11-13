import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies, getMovieCredits, getMovieDetails, searchMovie } from '../../api/tmdbApi'

// fetchMovies => PosterSlider.jsx
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ category, page }) => {
   const response = await getMovies(category, page)
   return response.data.results
})

// 영화 상세 정보 가져오기
export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movieId) => {
   const response = await getMovieDetails(movieId)
   return response.data
})

// 출연 배우 정보 가져오기
export const fetchMovieCredits = createAsyncThunk('movies/fetchMovieCredits', async (movieId) => {
   const response = await getMovieCredits(movieId)
   return response.data
})

// 검색어로 영화, TV 프로그램 검색
export const fetchSearchResults = createAsyncThunk('movies/fetchSearchResults', async ({ query, page }) => {
   const response = await searchMovie(query, page)
   return response.data.results
})

const moviesSlice = createSlice({
   name: 'movies',
   initialState: {
      loading: false, 
      movies: [], 
      movieDetails: null,
      movieCredtis: null,
      searchResults: [], 
      error: null, 
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         // fetchMovies
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true 
            state.error = null
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
     
            if (action.meta.arg.page === 1) {
               state.movies = action.payload
            } else {
              
               state.movies = [...state.movies, ...action.payload]
            }
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message 
         })

         // fetchMovieDetails
         .addCase(fetchMovieDetails.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.loading = false
            state.movieDetails = action.payload
         })
         .addCase(fetchMovieDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         // fetchMovieCredits
         .addCase(fetchMovieCredits.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieCredits.fulfilled, (state, action) => {
            state.loading = false
            state.movieCredits = action.payload
         })
         .addCase(fetchMovieCredits.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         // fetchSearchResults
         .addCase(fetchSearchResults.pending, (state) => {
            state.loading = true
            state.error = null
         })

         .addCase(fetchSearchResults.fulfilled, (state, action) => {
            state.loading = false
            if (action.meta.arg.page === 1) {
               state.searchResults = action.payload
            } else {
               state.searchResults = [...state.searchResults, ...action.payload]
            }
         })
         .addCase(fetchSearchResults.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default moviesSlice.reducer
