// 인기 영화 & 현재 상영 & 개봉 예정 영화 결과를 보여주는 페이지
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../features/movies/moviesSlice'

import '../styles/common.css'
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Button from '@mui/material/Button'
import MovieCard from '../components/MovieCard'

function MovieCategory({ category }) {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)
   const [page, setPage] = useState({
      popular: 1,
      now_playing: 1,
      upcoming: 1,
   })

   const isFirstLoad = useRef(true)

   useEffect(() => {
      if (isFirstLoad.current) {
         isFirstLoad.current = false
         return
      }
      // console.log('%c 1번 useEffect: ', 'font-weight:bold;', category)

      setPage((prevPage) => ({
         ...prevPage,
         [category]: 1,
      }))
   }, [category])

   useEffect(() => {
      console.log({ category, page: page[category] })
      dispatch(fetchMovies({ category, page: page[category] }))
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dispatch, page])

   const loadMore = useCallback(() => {
      setPage((prevPage) => ({
         ...prevPage,
         [category]: prevPage[category] + 1,
      }))
   }, [category])
   /*       setPage(
            (prevPage) => ({
               ...prevPage,
               [category]: prevPage[category] + 1,
            }),
            [category]
         )
      }, [category]) */

   if (loading && page === 1)
      return (
         <Wrap>
            <Menu />
            <Main>
               <h2>Loading...</h2>
            </Main>
            <Footer />
         </Wrap>
      )

   if (error)
      return (
         <Wrap>
            <Menu />
            <Main>
               <h2>Error: {error}</h2>
            </Main>
            <Footer />
         </Wrap>
      )

   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
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
