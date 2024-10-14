import React from 'react';
import './Banner.css';
import bannerImage from './bannerImage2.png';
import { FaArrowRight } from 'react-icons/fa';

export default function Banner() {
    return (
        <div className="custom-banner relative bg-cover bg-center h-72 md:h-96 lg:h-128" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-6 md:px-16 lg:px-24">
                <h1 className="text-2xl md:text-4xl mb-4">Muestra y vende tus mejores piezas de arte en el mejor mercado de arte online</h1>
                    <a href="#" className="text-white py-2 px-4 rounded-lg">
                        <p>Sé un vendedor</p>
                        <FaArrowRight className="icon-e h-4s w-4" />
                        </a>
            </div>
        </div>
    );
}
