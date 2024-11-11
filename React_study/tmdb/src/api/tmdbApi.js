import axios from 'axios'

// 인기있는 영화목록 : https://api.themoviedb.org/3 /movie/popular
const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjRkOWI5ZTUwZjA1MDg4OWU5OGU0Mzk4ODlkODNlMCIsIm5iZiI6MTczMTI4Njc5MC4xNzAyNDA5LCJzdWIiOiI2NzFhZTk0NzQ1NDJlMzcxZmUwYTZhZTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.28rsQnWHW-cix-LHrNnfgEPLp0mmq7-zyfg-hrr4MvI'

// api call을 준비하기 위한 axios 객체 생성
const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json', // 데이터를 json 형태로 호출
      Authorization: AUTH_KEY, // 서버에 request할 때 인증키
   },
})

// 인기 영화 목록 가져오는 함수
// getMovies함수를 외부로 내보내 다른곳에 사용하기 위해 export 키워드에 작성
// .get('나머지 주소', {호출할 쿼리파라미터})
// '나머지 주소' : tmdbApi에는 'https://api.themoviedb.org/3'를 미리 설정해놔서 이후 부분만 유동적으로 선택 ... Query Params
/* {호출쿼리파라} = {
                ?language=ko-KR&
                page=1&
                region=KR
                } */
// 리액트는 페이지별로 가져올 예정이기에 async ( page = 1)로 매개변수에 page를 선언하고 parmas에 page:page,를 사용
export const getMovies = async (page = 1) => {
   const response = await tmdbApi.get('/movie/popular', {
      params: {
         language: 'ko-KR',
         page, //page: page, 페이지가 계속 바뀌므로 매개변수로 page를 받아옴
         region: 'KR',
      },
   }) // get : 데이터 read 요청
   // tmdbApi에는 'https://api.themoviedb.org/3'를 미리 설정해놔서 이후 부분만 유동적으로 선택

   return response // 서버에 요청이 끝난 후 데이터를 반환하여 외부로 보냄
}

export default tmdbApi
