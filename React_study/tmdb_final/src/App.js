import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import MovieCategory from './pages/MovieCategory'
import SearchResults from './pages/SearchResults'
import NotFound from './pages/NotFound'

// 카테고리는 달라도 데이터만 다르고 화면은 같기에 컴포넌트를 재활용하여 MovieCategory를 공통적으로 보여줌
function App() {
   return (
      <Routes>
         <Route element={<Home />} path="/" />

         {/* MovieCategory를 공통으로 쓰지만 props로 category = [popular, now_playing, upcoming]으로 다르게 들어가게 한다 */}
         <Route element={<MovieCategory category="popular" />} path="/popular" />
         <Route element={<MovieCategory category="now_playing" />} path="/now_playing" />
         <Route element={<MovieCategory category="upcoming" />} path="/upcoming" />

         <Route element={<Detail />} path="/detail/:movieId" />
         <Route element={<SearchResults />} path="/search" />
         <Route element={<NotFound />} path="/*" />

         {/* 
          <Route element={<MovieCategory category="upcoming" />} path="/upcoming" />
          여기서 element속에도 props를 넣을 수 있다. ( categort="[popular, now_playing, upcoming]")
          MovieCategory.jsx에 props를 주었으므로 해당 컴포넌트에 컴포넌트에 {category}를 넣어서 App에서 넘겨주는걸 받게 해야함
          
          이건 [props]를 이용한 방법으로 [path 파라미터]를 이용한 방법도 있다.
         */}
      </Routes>
   )
}

export default App
