// 영화 슬라이더
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMovies } from '../../features/movies/moviesSlice'
// import { fetchTVs } from '../../features/tvs/tvsSlice'

// Import Swiper styles // css파일이라 꼭 있어야함
import 'swiper/css'
import 'swiper/css/navigation'
import '../css/PosterSlider.css'
// import './styles.css' // 커스터마이징 css코드 => 나는 [PosterSlider.css]를 사용하기에 주석처리하고 따로 import함

// import required modules

// ▼ 원래 이렇게 바로 내보내도 되나 여기서는 일관성을 위해 export는 아래에 따로 작성
// export default function PosterSlider() {}

/*
slidesPerView={3} : 보여줄 포스터 수
spaceBetween={30} : 포스터간 간격
pagination={{
    clickable: true,  : 아래쪽 도트형태로 페이지 목록을 보여줌 ... 여기서는 사용 X
    }}
*/
function PosterSlider() {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispatch(fetchMovies({ category: 'now_playing', page: 1 }))
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <>
           <Swiper slidesPerView={5} spaceBetween={30} navigation={true} modules={[Navigation]} className="mySwiper">
               {movies.map((movie) => (
                   <SwiperSlide key={movie.id}>
                       <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                   </SwiperSlide>
               ))}
            {/* <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
            <SwiperSlide>Slide 10</SwiperSlide> */}
         </Swiper>
      </>
   )
}

export default PosterSlider
/* 
const moviesSlice = createSlice({
   name: 'movies',
   initialState: {
      loading: false, // 로딩여부 state
      movies: [], // 영화 정보 state
      movieDetails: null, // 영화 상세 정보 state
      movieCredits: null, // 출연 배우 정보 state
      error: null, // 에러 메세지 state
   },
   reducers: {
      resetMovies(state) {
         state.movies = [] // movies state 초기화
      },
   },
   extraReducers: (builder) => {
      
         promise 결과 반환
         pending: 대기상태, fulfilled: 성공상태, rejected: 실패상태
      
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true //로딩 중
            state.error = null
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false //로딩 완료
            if (action.meta.arg.page === 1) {
               // 페이지가 1일때는 그냥 새로운 데이터로 state 업데이트
               state.movies = action.payload
            } else {
               //페이지가 2 이상일때는 기존 데이터 + 새로운 데이터로 state 업데이트

               
               state.movies = [...state.movies, ...action.payload]와 같은 방식으로 새로운 배열을 할당하는 것은 허용되지만, state = [...state, ...]처럼 최상위 상태를 재할당하는 것은 불가능.
               
               state.movies = [...state.movies, ...action.payload]

               
               툴킷은 불변성이 유지 되므로 아래와 같이 작성해도 된다. 
               action.payload.forEach((movie) => state.movies.push(movie))
               
               다만 fulfilled가 여러번 실행되면서 데이터가 중복해서 들어가므로 아래와 같이 걸러준다. -> fulfilled가 여러번 실행 방지 해결필요(첫페이지 들어올때만 그렇긴함) -> useEffect 조정

               useEffect조정 이후에도 종종 중복되서 들어가는 이유는 인기영화, 현재 상영 중, 개봉예정 영화 중 겹치는 영화들이 존재한다. 따라서 아래와 같이 id가 같은 영화는 필터링을 진행을 해줘야 한다
               
               action.payload.forEach((movie) => {
                  if (!state.movies.some((existingMovie) => existingMovie.id === movie.id)) {
                     state.movies.push(movie)
                  }
               })
               
            }
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message // 에러발생시 에러메세지 전달
         })

*/