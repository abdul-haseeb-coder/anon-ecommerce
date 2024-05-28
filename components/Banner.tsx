"use client"
import React from 'react';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const slides = [
    {
      image: '/banner-1.jpg',
      alt: "women's latest fashion sale",
      subtitle: 'Trending item',
      title: "Women's latest fashion sale",
      text: 'starting at $20.00',
      btnText: 'Shop now',
      btnLink: '#',
    },
    {
      image: '/banner-2.jpg',
      alt: 'modern sunglasses',
      subtitle: 'Trending accessories',
      title: 'Modern sunglasses',
      text: 'starting at $15.00',
      btnText: 'Shop now',
      btnLink: '#',
    },
    {
      image: '/banner-3.jpg',
      alt: 'new fashion summer sale',
      subtitle: 'Sale Offer',
      title: 'New fashion summer sale',
      text: 'starting at $29.99',
      btnText: 'Shop now',
      btnLink: '#',
    },
  ];

  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          {slides.map((slide, index) => (
            <div className="slider-item" key={index}>
              <Image
                src={slide.image}
                alt={slide.alt}
                className="banner-img"
                layout="fill"
                objectFit="cover"
                objectPosition="right"
              />
              <div className="banner-content">
                <p className="banner-subtitle">{slide.subtitle}</p>
                <h2 className="banner-title">{slide.title}</h2>
                <p className="banner-text">{slide.text}</p>
                <a href={slide.btnLink} className="banner-btn">{slide.btnText}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
