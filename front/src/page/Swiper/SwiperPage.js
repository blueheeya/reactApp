import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperPage() {
  return (
    <>
    <section className='container h-full m-auto mt-7'>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='h-full'
    >
      <SwiperSlide className='h-full'>Slide 1</SwiperSlide>
      <SwiperSlide className='h-full'>Slide 2</SwiperSlide>
      <SwiperSlide className='h-full'>Slide 3</SwiperSlide>
      <SwiperSlide className='h-full'>Slide 4</SwiperSlide>
    </Swiper>
    </section>
    </>
  )
}

export default SwiperPage