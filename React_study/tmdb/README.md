# TMDB 개발과정

## 목차

1. [라이브러리 설치](#1-라이브러리-설치)
2. [Axios](#axios)
3. MUI
4. [개발하기](#개발하기)
   -  API 연결하기

## [1. 라이브러리 설치](#tmdb-개발과정)

리액트에서 API 사이트를 제작하기 위해 필요한 라이브러리 설치

-  npm install redux react-redux

-  npm install @reduxjs/toolkit

-  npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

-  npm install axios

## [Axios](#tmdb-개발과정)

then대신 async-await로 바꿔서 사용 할 예정

<details>
<summary>
<span style="font-size:16px">[예제 Code]</span>
</summary>

```
const axios = require('axios');

// 지정된 ID를 가진 유저에 대한 요청
axios.get('/user?ID=12345')
  .then(function (response) {
    // 성공 핸들링
    console.log(response);
  })
  .catch(function (error) {
    // 에러 핸들링
    console.log(error);
  })
  .finally(function () {
    // 항상 실행되는 영역
  });

// 선택적으로 위의 요청은 다음과 같이 수행될 수 있습니다.
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // 항상 실행되는 영역
  });

// async/await 사용을 원한다면, 함수 외부에 `async` 키워드를 추가하세요.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

</details>

## [개발하기](#tmdb-개발과정)

tmdb의 기본 주소체계\
<span style="font-weight:bold;text-decoration: none;">https://api.themoviedb.org/3</span> + /movie/popular 등등

1. API 연결하기

   -  API를 연결하기 위한 js파일 생성 (tmdbApi.js)\
      // BASE_URL은 TMDB의 공통주소\
      // AUTH_KEY 는 API키\
      // export default에 async을 사용하여 외부로 getMovies 함수를 내보냄\
      // tmdb.get('나머지 주소', '{쿼리파라미터 정보}') 형태\
      // tmdb.Api의 headers

      -  accept : 데이터 형태를 json 형태로 호출
      -  Authorization: AUTH_KEY : 위에서 선언한 인증키 가져오기\

      // '나머지 주소' : /movie/popular\
      // {Query Params} : ?language=ko-KR&page=1&region=KR (구조 : ＆변수이름 = 변수＆)

      -  첫번째 쿼리파라 : language = ko-KR
      -  두번쨰 쿼리파라 : page = 1
      -  세번째 쿼리파라 : region = KR\

      // async (page = 1) : async의 매개변수로 page를 주고 쿼리파라 객체정보에 page를 줌으로써 여러 페이지를 가져 올 수 있음

    <details>
    <summary>
    <span style="font-size:16px">[tmdbApi.js Code]</span>
    </summary>

   ```
    const BASE_URL : 'https://api.themoviedb.org/3'
    const AUTH_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjRkOWI5ZTUwZjA1MDg4OWU5OGU0Mzk4ODlkODNlMCIsIm5iZiI6MTczMTI4Njc5MC4xNzAyNDA5LCJzdWIiOiI2NzFhZTk0NzQ1NDJlMzcxZmUwYTZhZTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.28rsQnWHW-cix-LHrNnfgEPLp0mmq7-zyfg-hrr4MvI'

    const tmdbApi = axios.create({
        baseURL: BASE_URL,
        headers: {
            accept: application / json,
            Authorization: AUTH_KEY,
            },
        })

    export const getMovies = async (page = 1) => {
        const response = await tmdbApi.get('/movie/popular', {
            params: {
                language: 'ko-KR',
                page, // page: page
                region: 'KR',
                },
            })

    return reponse
   ```

      </details>

2. MovieList.jsx 작성하기

-  리엑트에서 데이터를 get할 때 useEffect를 사용함 (렌더링 후 첫 1회만 하기위해 빈 배열을 뒤에 붙임)\
   useEffect(function, deps) 형태로\
   deps = []를 줌
-  useEffect에 〈tmdbApi.js〉의 데이터를 담고 해당 함수는 비동기이기에 async-await로 구성함

      <details>
      <summary>

   <span style="font-size:16px">[MovieList.jsx Code]</span>

      </summary>

         ```
         import React, { useState, useEffect } from 'react'

          import { getMovies } from '../../api/tmdbApi.js'

          function MovieList() {
          const [movies, setMovies] = useState([]) // response된 인기 영화목록을 담을 state
           const [loading, setLoading] = useState(true) // 로딩여부
          const [error, setError] = useState(null) // 에러 메세지

          useEffect(() => {
          const fetchMovies = async () => {
          try {
          setLoading(true)

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

          if (loading) return <p>Loading...</p> // 이미지를 넣을 수도 있다.

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

          ```

   </details>
