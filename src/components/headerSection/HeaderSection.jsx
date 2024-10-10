import React from 'react';
import './HeaderSection.css';
import artImage1 from './art1.jpg';
import artImage2 from './art2.jpg';

export default function HeaderSection() {
    return (
        <section className="custom-hs-styles">
            <div className="container-hs">
                <div className="image-section">
                    <div className="image-container">
                    <img src={artImage1} alt="Arte 1" />
                    </div>
                    <div className="image-container">
                    <img src={artImage2} alt="Arte 2" />
                    </div>
                </div>
                <div className="right-text-area">
                    <h1 className="text-5xl font-bold mb-6">Compra y Vende Arte Digital</h1>
                    <p className="text-lg mb-4">
                        Somos la tienda por excelencia para la compra y venta de arte digital a nivel mundial.
                    </p>
                </div>
            </div>
        </section>
    );
}