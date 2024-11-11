import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../features/moviesSlice'

function MovieList() {
   const dispatch = useDispatch()
   // 여기 movies = store.js의 movies로 이 movies는 또 moviesSlice에 있는 moviesSlice.reducer이기에 {loading:false, movies: [], error:null}
   const { movies, loading, error } = useSelector((state) => state.movies)

   // 기존 dispatch는 업, 다운 온클릭 액션
   useEffect(() => {
      dispatch(fetchMovies())
   }, [dispatch]) // dispatch가 변화는 경우는 흔치 않지만 혹시모를 경우를 대비해 권장사항으로 [dispatch]를 deps에 입력

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div>
         <h1>인기 영화</h1>
         <ul>
            {movies.map((movie) => (
               <li key={movie.id}>{movie.title}</li>
            ))}
         </ul>
      </div>
   )
}

export default MovieList
