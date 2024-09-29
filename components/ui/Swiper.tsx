'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import { images } from '@/lib/images';

function Slider() {
  return (
    <Swiper className='h-12 overflow-hidden' navigation modules={[Navigation, Pagination]} pagination={{ type: 'fraction' }}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image alt={image.alt} src={image.src} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
