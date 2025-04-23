import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Advertisment.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const Advertisment = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/img/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/img/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/img/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/img/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};


export default Advertisment