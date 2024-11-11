import React, { useState, useEffect } from 'react'
import { getMovies } from '../../api/tmdbApi.js'

function MovieList() {
   const [movies, setMovies] = useState([]) // response된 인기 영화목록을 담을 state
   const [loading, setLoading] = useState(true) // 로딩여부
   const [error, setError] = useState(null) // 에러 메세지

   // 리액트에서 데이터를 겟 할때 useEffect 사용 (렌더링하고나서 실행)
   useEffect(() => {
      const fetchMovies = async () => {
         try {
            setLoading(true)

            // getMovies 함수는 비동기 함수이므로 완전히 끝날때까지 await를 사용하여 기다렸다가 결과를 가져옴
            const MovieList = await getMovies(1) // 1 page의 영화목록 가져오기

            console.log('--MovieList-- \n', MovieList)
            setMovies(MovieList.data.results) // 인기영화 데이터는 .data.results에 배열형태로 존재하기에 해당 데이터를 넣어줌 (MovieList의 data객체에 results객체에 존재)
         } catch (err) {
            setError(err.message) // 서버에서 콜하다가 (데이터를 받는도중에) 에러가 나면 여기서 모두 잡아주고 에러메세지를 error state에 담아줌
         } finally {
            setLoading(false) // finally는 무조건 실행되는 부분이기에 false로 로딩완료
         }
      }
      fetchMovies() // 마지막에 fetchMovies를 실행시켜 useEffect 가동
   }, [])
   // console.log('--setMovies = MovieList.data.results-- \n', movies)

   if (loading) return <p>Loading...</p> // 이미지를 넣을 수도 있다.

   if (error) return <p>Error: {error}</p>
   console.log('--setMovies = MovieList.data.results-- \n', movies)

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
