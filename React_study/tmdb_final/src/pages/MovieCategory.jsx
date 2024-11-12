// 인기 영화 & 현재 상영 & 개봉 예정 영화 결과를 보여주는 페이지

import '../styles/common.css'
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Button from '@mui/material/Button'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMovies } from '../features/movies/moviesSlice'
import MovieCard from '../components/MovieCard'

function MovieCategory({ category }) {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   // 카테고리 page로 사용할 state 지정
   // 더보기 버튼 누를 때 마다 State가 늘어남
   const [page, setPage] = useState({
      popular: 1,
      now_playing: 1,
      upcoming: 1,
   })

   // 카테고리가 변경될 때 페이지를 1로 초기화
   useEffect(() => {
      setPage((prevPage) => ({
         ...prevPage,
         [category]: 1,
      }))
   }, [category])

   // page가 변할 때 마다 영화 데이터 로딩
   useEffect(() => {
      console.log({ category, page: page[category] })
      dispatch(fetchMovies({ category, page: page[category] })) // category = category : category
   }, [dispatch, page])

   // onClick으로 업데이트시키며 함수 재사용을 위해 (재생성방지) useCallback 사용
   const loadMore = useCallback(() => {
      setPage((prevPage) => ({
         ...prevPage,
         [category]: prevPage[category] + 1, // 1페이지씩 증가
      }))
   }, [category])

   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            {/* MovieCategory: {category} */}

            {/* 영화목록 데이터를 movies props로 전달 */}
            <MovieCard movies={movies} />
            <Button variant="outlined" sx={{ margin: '20px auto', display: 'block', width: '500px' }} onClick={loadMore}>
               더보기
            </Button>
         </Main>
         <Footer />
      </Wrap>
   )
}
export default MovieCategory
