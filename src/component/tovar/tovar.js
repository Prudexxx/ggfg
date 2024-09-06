// src/ProductList.js
import React, { useState } from 'react';
import './tovar.css'; // Импортируем стили
import Pelmeni from './Пельмени.JPG';
import PelmeniGotovue from './ПельмениГотовые.JPG';
import SuroyCheburek from './сыройЧебурек.JPG';
import cheburek1 from './cheburek1.jpg';
import farsch from './Фарш.jpeg';
import farsh1 from './фарш1.JPG';
import mnogoCheburekov from './Пельмен.JPG';
import pelmeni from './СырыеПельмени.JPG'
const products = [
    {
        id: 1,
        name: 'Пельмени  650 р за 1 кг',
        price: 'Самые настоящие домашние пельмени с мясным фаршем: сытные и вкусные!  В 1 кг примерно 80 - 100 штук, которых хватает на один вечер насытиться 4  среднего телосложения.',
        price1:'Каждый пельмень сделан вручную, из самодельного фарша и теста. ',
        images: [
            pelmeni,
            PelmeniGotovue,
            Pelmeni,
        ],
    },
    {
        id: 2,
        name: 'Чебуреки  650 р за 1 кг',
        price: 'Для тех кто любит  жаренные чебуреки , в 1 кг примерно 8 - 10\ штук, подойдет для быстрого и сытного перекуса.',
        price1:'аваоло',
        images: [
            mnogoCheburekov,
            SuroyCheburek,
            cheburek1,
           
        ],
    },
    {
        id: 3,
        name: 'Фарш   650 р за 1 кг',
        price: 'Идеально подходит для котлет, пельменей, чебуреков, болоньезе, суп с фрикадельками и т.д.',
        price1:'аваоло',
        images: [
            farsch,
            farsh1,
        ],
    },
];

const ProductList = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openPopup = (product) => {
        setSelectedProduct(product);
        setCurrentImageIndex(0);
        setIsOpen(true);
    };

    const closePopup = () => {
        setSelectedProduct(null);
        setIsOpen(false);
    };

    const nextImage = () => {
        if (selectedProduct && currentImageIndex < selectedProduct.images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const prevImage = () => {
        if (selectedProduct && currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <div className="product-list-container">
            <h1>Продукция</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.images[0]} alt={product.name} className="product-image" />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <button onClick={() => openPopup(product)}>Подробнее</button>
                    </div>
                ))}
            </div>

            {isOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>&times;</span>
                        <h2>{selectedProduct.name}</h2>
                        <div className="image-gallery">
                            <button className='strelki' onClick={prevImage} disabled={currentImageIndex === 0}>˂</button>
                            <img src={selectedProduct.images[currentImageIndex]} alt={selectedProduct.name} />
                            <button className='strelki' onClick={nextImage} disabled={currentImageIndex === selectedProduct.images.length - 1}>&#62;</button>
                        </div>
                        <p>{selectedProduct.price1}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;

