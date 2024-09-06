
import React, { useState, useEffect } from "react";
import './product.css';
import myso from './myso.jpg';
import suroeMyso from './suroeMyso.jpg';
import skovorodaChebureki from './skovorodaChebureki.jpeg';
import surueChebureki from './surueChebureki.JPG';
import farsch from './farsch.jpg'
import gotovueChebur from './gotovueChebureki.jpg';
import cheburek1 from '../tovar/cheburek1.jpg'



const SimpleCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {src: cheburek1, alt: "Изображение 1"},
        {src: myso, alt: "Изображение 1"},
        {src: suroeMyso, alt: "Изображение 2"},
        {src: farsch, alt: "Изображение 4"},
        {src: surueChebureki, alt: "Изображение 3"},
        {src: skovorodaChebureki, alt: "Изображение 4"},
        
        {src:gotovueChebur, alt: "Изображение 6"},
       

    ];

    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Меняем слайд каждые 3 секунды
        return () => clearInterval(interval); // Очистка при размонтировании
    }, []);

    return (
        <div className="carousel-container">
            <div className="carousel" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                        <img src={slide.src} alt={slide.alt} className="slide-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimpleCarousel;

