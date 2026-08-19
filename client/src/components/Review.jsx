import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Review.css";

const Review = () => {
  const reviews = [
    {
      img: 'images/review1.avif',
      name: 'Ravi Sharma',
      text: "Exceptional service at great value. The accommodations, itinerary, and attention to detail made my trip stress‑free and enjoyable."
    },
    {
      img: 'images/review2.avif',
      name: 'Arushi Mehra',
      text: "TravelCo delivered the perfect mix of planning and fun. The smooth arrangements, helpful staff, and well-curated experiences."
    },
    {
      img: 'images/review3.avif',
      name: 'Vikram Joshi',
      text: "A perfect blend of comfort and excitement. From smooth transfers to delicious cuisine and interesting sightseeing."
    },
    {
      img: 'images/review4.avif',
      name: 'Sneha Kapoor',
      text: "Absolutely loved the experience! The team went above and beyond to accommodate our preferences."
    }
  ];

  return (
    <section className="review" id="review">
      <h1 className="heading">
        <span>r</span><span>e</span><span>v</span><span>i</span><span>e</span><span>w</span>
      </h1>

      <Swiper className="review-slider" spaceBetween={20} slidesPerView={1} breakpoints={{
        768: { slidesPerView: 2 },
        991: { slidesPerView: 3 }
      }}>
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="box">
              <img src={review.img} alt="" />
              <h3>{review.name}</h3>
              <p>"{review.text}"</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;