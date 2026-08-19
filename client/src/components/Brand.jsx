import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./Brand.css";

const Brand = () => {
  const brands = [
    'images/brand1.png',
    'images/brand2.webp',
    'images/brand3.webp',
    'images/brand4.webp',
    'images/brand5.webp',
    'images/brand6.webp'
  ];

  return (
    <section className="brand-container">
      <Swiper className="brand-slider" spaceBetween={20} slidesPerView={2} breakpoints={{
        768: { slidesPerView: 3 },
        991: { slidesPerView: 6 }
      }}>
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <img src={brand} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Brand;