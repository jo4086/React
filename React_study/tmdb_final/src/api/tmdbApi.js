import axios from 'axios'

// TMDB API 기본 URL과 API 키 설정
const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjRkOWI5ZTUwZjA1MDg4OWU5OGU0Mzk4ODlkODNlMCIsIm5iZiI6MTczMTQ4OTI0MS4wOTg5OTIsInN1YiI6IjY3MWFlOTQ3NDU0MmUzNzFmZTBhNmFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8QFFQoHvV-Mq06JbcQL47O1XIfQqJ9m_oqo7NwexqnQ'


// api call을 준비하기 위한 axios 객체 생성
const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json', // 데이터를 json 형태로 호출
      Authorization: AUTH_KEY, // 서버에 request할 때 인증키
   },
})

// 공통 API 호출 함수
const fetchFromApi = async (url, params = {}) => {
   try {
      const response = await tmdbApi.get(url, { params })
      return response
   } catch (error) {
      console.error(`API 요청 오류: ${error.message}`)
      throw error
   }
}

// 인기, 상영중, 개봉 예정 영화 가져오기
export const getMovies = (category = 'popular', page = 1) => {
   const endpoint = {
      popular: '/movie/popular',
      now_playing: '/movie/now_playing',
      upcoming: '/movie/upcoming',
   }[category]
   // [category] 필수 .... App.js에서 MovieCategory에 props로 {category를} 주었고 이를 받기 위해서
   /* 
    App.js에서 'popular', 'now_playing', 'upcoming'을 보내면
    ['popular'], ['now_playing'], ['upcoming'] 가 설정되고
    객체 읽는법 中 객체명.key 말고 객체명['key']를 이용해서 해당 객체키의 값을 가져오는 형태
    */
   return fetchFromApi(endpoint, {
      language: 'ko-KR',
      page,
      region: 'KR',
   })
}

// 인기, 방송 중인 tv 목록 가져오기
export const getTVs = (type, page = 1) => {
   const endpoint = {
      popular: '/tv/popular',
      on_the_air: '/tv/on_the_air',
   }[type]

   return fetchFromApi(endpoint, {
      laguage: 'ko-KR',
      page,
   })
}

//영화 상세 정보 가져오기
export const getMovieDetails = (movieId) => {
   return fetchFromApi(`/movie/${movieId}`, {
      language: 'ko-KR'
   })
}

//출연 배우 정보 가져오기
export const getMovieCredits = (movieId) => {
   return fetchFromApi(`/movie/${movieId}/credits`, {
      language: 'ko-KR',
   })
}

// 검색 API 호출 가져오기
export const searchMovie = (query, page = 1) => {
   return fetchFromApi('/search/movie', {
      query, // 검색어
      page,
      language: 'ko-KR',
      include_adult: false, // 성인 콘텐츠 여부
      region: 'KR',
   })
}

export default tmdbApi
