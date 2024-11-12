## 기초지식

-  React는 SPA(single Page Application)을 만들기 위한 프레임 워크
-

## 초기설정

-  라이브러리 설치
-  index.js ▶ [BrowserRouter] import하고 App.js 감싸기
-  ## 폴더 구조 작성하기
-

설치 라이브러리

```
npm install redux react-redux

npm install @reduxjs/toolkit

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

npm install axios

npm install react-router-dom

npm install styled-components

npm install swiper
```

package.json에 디버그 스크립트의 start 부분에 〈"set PORT=3002 &&〉를 추가하여 다른작업하면서 개발 할 수 있게함

```
  "scripts": {
    "start": "set PORT=3002 && react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

> <p><span style="font-style:italic;font-weight:bold;font-size:1.1em">pages</span> Folder </p>
>
> -  Home.jsx : 메인화면
> -  Detail.jsx : 디테일
> -  MovieCategory.jsx : 영화
> -  SearchResutls.jsx : 검색 결과
> -  NotFound.jsx : 경로 찾기 실패
>
> 상위 4개 jsx파일은 모두 같은 import를 받음

### StyledComponent.js

[Home, Detail, MovieCategory, SearchResults].jsx 파일에 Main부분에 padding="30px 0"을 주게되면\
export const Main = styled.main 벡틱이 작용함

<details>
<summary>
[코드 보기]
</summary>

```
import styled from 'styled-components'

export const Wrap = styled.div`   overflow: hidden;
   min-width: ${(props) => props.$minWidth || '1200px'};`

export const Main = styled.main`   width: ${(props) => props.$width || '1200px'};
   margin: 0 auto;
   overflow: hidden;
   padding: ${(props) => props.$padding || 0};`
```

</details>

// 라우터를 이용해 화면을 보여줘야함

-  <span style="font-style:italic;font-weight:bold;font-size:1.1em">styles</span> Folder

   -  styeldComponents.js

      <details>
      <summary>
      [코드 보기]
      </summary>

      ```
      import styled from 'styled-components'

      export const Wrap = styled.div`
         overflow: hidden;
         min-width: ${(props) => props.minWidth || '1200px'};
      `

      export const Main = styled.main`
      width: ${(props) => props.width || '1200px'};
      margin: 0 auto;
      overflow: hidden;
      padding: ${(props) => props.padding || 0};
      `

      ```

</details>

```
d
```

### Banner.jsx

-  MUI : Components - [TextField], [Button] 사용

    <details>
    <summary>
    <span style="font-style:italic;font-weight:bold;font-size:1.1em">Banner.jsx</span> [핵심 코드 보기]
    </summary>
    
    ```
    import { Button, TextField } from '@mui/material'
    import SearchIcon from '@mui/icons-material/Search'

   {/_ --- 구분선 --- _/}

   {/_ << 1. TextField >> _/}
   <TextField
   fullWidth
   label="영화검색"
   id="fullWidth"
   sx={{
          backgroundColor: 'white',
       }}
   />

   {/_ << 2. Button >> _/}
   <Button
   variant="outlined"
   startIcon={<SearchIcon />}
   sx={{
      width: 100,
      height: 56,
      backgroundColor: 'white',
      }} >

       검색

    </Button>
    ```
    </details>

<details>
<summary>
**_Banner.jsx_** [전체 코드 보기]

</summary>

```
import '../css/Banner.css'
import { Button, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

function Banner() {
   return (
      <div
         style={{
            width: '100%',
            height: '400px',
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(/images/banner.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
         }}
      >
         <div className="search">
            <h1 className="header_msg">환영합니다! 수백만 개의 영화를 지금 살펴보세요/</h1>

            <form className="search_form">
               <TextField
                  fullWidth
                  label="영화검색"
                  id="fullWidth"
                  sx={{
                     backgroundColor: 'white',
                  }}
               />

               <Button
                  variant="outlined"
                  startIcon={<SearchIcon />}
                  sx={{
                     width: 100,
                     height: 56,
                     backgroundColor: 'white',
                  }}
               >
                  검색
               </Button>
            </form>
         </div>
      </div>
   )
}

export default Banner

```

</details>

---

### PosterSlider.jsx

영화 슬라이더 컴포넌트로 [ **_Swiper 라이브러리_** ]를 사용하여 슬라이드 효과를 줌
