// 메인화면
import React, { useState } from 'react'

import '../styles/common.css'
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import PosterSlider from '../components/slider/PosterSlider'
import TvSlider from '../components/slider/TvSlider'

// MUI 토글버튼
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

function Home() {
   const [alignment, setAlignment] = useState('movie')

   const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment)
   }

   return (
      <Wrap>
         <Menu />
         <Main>
            <Banner />
            <div className="common_margin_tb" style={{ position: 'relative' }}>
               <div className="blurred"></div>

               <div style={{ display: 'flex', position: 'relative' }}>
                  <h3 style={{ height: '50px', lineHeight: '50px' }}>현재 상영중</h3>&nbsp;&nbsp;
                  <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
                     <ToggleButton value="movie">영화</ToggleButton>
                     <ToggleButton value="tv">TV</ToggleButton>
                  </ToggleButtonGroup>
               </div>

               {alignment === 'movie' ? <PosterSlider /> : <TvSlider />}
               {/* <div className="blurred"></div> */}
            </div>
         </Main>
         <Footer />
      </Wrap>
   )
}
export default Home

/* 

   return (
      <Wrap>
         <Menu />
         <Main>
            <Banner />
            <div className="common_margin_tb">
               <div></div>
               <PosterSlider />
            </div>
         </Main>
         <Footer />
      </Wrap>
   )
   
*/
