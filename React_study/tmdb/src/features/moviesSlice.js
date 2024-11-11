import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getMovies } from '../api/tmdbApi'

// createAsyncThunk() : 영화 목록을 APU로 부터 가져옴 비동기 함수로 api 호출
// 비동기 액션을 처리해줌 ... 이로 인해 reducers에 액션을 따로 작성하지 않아도 됌
// createAsyncThunk() 구성 : pending, fulfilled, rejected
// pending: 로딩중
// fulfilled : 성공
// rejected : 실패
// 비동기의 3가지 액션 .. 데이터 로딩전 성공적으로 가져왔을때 ,, 호출 실패시
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getMovies()
   return response.data.results // action.payload로 전달됌
})

const moviesSlice = createSlice({
   name: 'movies',
   initialState: {
      loading: false, // 로딩상태
      movies: [], // 영화 목록 데이터가 저장될 배열
      error: null, // 에러 메세지
   },
   reducers: {},
   // State를 업데이트... 비동기 액션의 각 state를 업데이트를 하는 함수
   // 비동기 통신에 대한 액션처리는 [createAsyncThunk]와 [extraReducers]가 해준다.
   // extraReducers는 액션을 따로 내보내지 않음
   // 이것 역시 특별한 키네임으로 .addCase()도 바꾸면 안됌
   extraReducers: (builder) => {
      builder
         // 데이터를 가져오는 동안
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
         })
         // 데이터를 성공적으로 가져오는 경우
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            state.movies = action.payload // 비동기 통신 결과
         })
         // 데이터 호출 실패(api 호출 실패)
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message // 에러메세지
         })
   },
})
console.log(moviesSlice.reducer)
export default moviesSlice.reducer
