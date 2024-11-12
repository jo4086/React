// 크레딧 슬라이더

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles // css파일이라 꼭 있어야함
import 'swiper/css'
import 'swiper/css/navigation'

// import './styles.css' // 커스터마이징 하는 css코드

// import required modules
import { Navigation } from 'swiper/modules'

export default function App() {
   return (
      <>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
         </Swiper>
      </>
   )
}
