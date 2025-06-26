import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./App.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination,]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='image1'><img src="../r4.png" alt="Photo 1" /></SwiperSlide>
      <SwiperSlide className='image1'> <img src="../r3.png" alt="Photo 2" /></SwiperSlide>
      <SwiperSlide className='image1'> <img src="../r2.png" alt="Photo 3" /></SwiperSlide>
      <SwiperSlide className='image1'><img src="https://img.freepik.com/free-photo/camper-life-concept-with-woman-cooking_23-2148456432.jpg?semt=ais_hybrid&w=740" alt="Photo 4" /></SwiperSlide>
      <SwiperSlide className='image1'> <img src="https://img.freepik.com/free-photo/cartoon-style-character-traveling_23-2151129681.jpg?semt=ais_hybrid&w=740" alt="Photo 5" /></SwiperSlide>
      <SwiperSlide className='image1'> <img src="https://i.pinimg.com/736x/04/e5/50/04e550469bb787171a54f24358f1c6d2.jpg" alt="Photo 6" /></SwiperSlide>
      <SwiperSlide className='image1'> <img src="https://i.pinimg.com/736x/e7/86/34/e78634e7bdd0a1c778064a15ac6ca6a5.jpg" alt="Photo 7" /></SwiperSlide>
      <SwiperSlide className='image1'> <img src="https://i.pinimg.com/736x/fc/86/cb/fc86cbcc88c6345740850e5d5f90eec7.jpg" alt="Photo 8" /></SwiperSlide>
      <SwiperSlide className='image1'> <img src="https://i.pinimg.com/736x/32/ea/ea/32eaea9a06765b2200d337700225af36.jpg" alt="Photo 9" /></SwiperSlide>
    </Swiper>
  );
};
