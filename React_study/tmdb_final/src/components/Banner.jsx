import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import './css/Banner.css'
import { Button, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

function Banner() {
   const [searchQuery, setSearchQuery] = useState('') // 검색어 상태 관리

   // useNavigate() : 페이지를 이동하게 하는 훅,,, 특정 이벤트 (example. 버튼 클릭)에서 페이지 이동 등에 사용 (SPA방식 적용...)
   const navigate = useNavigate()

   // 검색어 입력 처리
   const handleInputChange = useCallback((event) => {
      setSearchQuery(event.target.value)
   }, [])

   // 검색 버튼 클릭 시 검색 페이지 이동
   const handleSearch = useCallback(
      (event) => {
         event.preventDefault()
         if (searchQuery.trim()) {
            // http://localhost:3001 뒤에 /search?query=검색단어
            navigate(`/search?query=${searchQuery}`) // 검색어를 query 파라미터로 전달
         }
      },
      [searchQuery, navigate]
   )

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

            <form className="search_form" onSubmit={handleSearch}>
               <TextField
                  fullWidth
                  label="영화검색"
                  id="fullWidth"
                  sx={{
                     backgroundColor: 'white',
                  }}
                  value={searchQuery}
                  onChange={handleInputChange}
               />

               <Button
                  variant="outlined"
                  startIcon={<SearchIcon />}
                  sx={{
                     width: 100,
                     height: 56,
                     backgroundColor: 'white',
                  }}
                  type="submit"
               >
                  검색
               </Button>
            </form>
         </div>
      </div>
   )
}

export default Banner
