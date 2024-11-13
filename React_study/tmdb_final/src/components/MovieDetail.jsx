import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMovieDetails } from '../features/movies/moviesSlice'

import Grid from '@mui/material/Grid2'
import Rating from '@mui/material/Rating'

function MovieDetail() {
   const { movieId } = useParams()
   const dispatch = useDispatch()
   const { movieDetails, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      if (movieId) {
         dispatch(fetchMovieDetails(movieId))
      }
   }, [dispatch, movieId])

   if (loading) return <p>Loading...</p>

   if (error) return <p>Error : {error}</p>

   return (
      <>
         {/* movieDetails의 초기 state는 null 이므로 movieDtails의 값이 있을때만 보여주게 함 */}
         {movieDetails && (
            <Grid container spacing={2}>
               <Grid size={3}>
                  <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} alt={movieDetails.title} width="270" />
               </Grid>
               <Grid size={9}>
                  <h2 style={{ marginBottom: '10px' }}>{movieDetails.title}</h2>
                  <h3 style={{ marginTop: '10px' }}>줄거리</h3>
                  <p>{movieDetails.overview}</p>
                  <h3 style={{ marginTop: '10px' }}>장르</h3>
                  <p>{movieDetails.genres.map((genre) => `${genre.name}`).join(',')}</p>
                  <h3 style={{ marginTop: '10px' }}>개봉일</h3>
                  <p>{movieDetails.release_date}</p>
                  <h3 style={{ marginTop: '10px' }}>평점</h3>
                  <p>
                     <Rating name="read-only" value={movieDetails.vote_average / 2} readOnly />
                  </p>
               </Grid>
            </Grid>
         )}
      </>
   )
}

/* 
         {movieDetails && (
            <Grid container spacing={2}>
               <Grid size={3}>
                  <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} width="270" />
               </Grid>
               <Grid size={9}>
                  <h2 style={{ marginBottom: '10px' }}>s</h2>
                  <h3 style={{ marginTop: '10px' }}>줄거리</h3>
                  <p></p>
                  <h3 style={{ marginTop: '10px' }}>장르</h3>
                  <p></p>
                  <h3 style={{ marginTop: '10px' }}>개봉일</h3>
                  <p></p>
                  <h3 style={{ marginTop: '10px' }}>평점</h3>
                  <p>{ <Rating name="read-only" value={value} readOnly /> }</p>
               </Grid>
            </Grid>
         )}
*/

export default MovieDetail

// MUI : rating : 별점기능 추가
// Gird :  3:9 비율로 이미지와 텍스트박스 구성
// useParams : 주소에서 movie_id 값을 가져옴
// 이후 useEffect로 dispatch를 일으킴
