'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import { images } from '@/lib/images';

function Slider() {
  return (
    <Swiper
      navigation
      autoplay={{ delay: 3000 }}
      className='h-12 overflow-hidden w-24 shadow-black shadow-2xl'
      modules={[Navigation, Autoplay]}
      pagination={{ type: 'fraction', clickable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image alt={image.alt} height={500} src={image.src} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
