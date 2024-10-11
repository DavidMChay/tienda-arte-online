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
                    <div className="introduction-text">
                        <h1>Compra y Vende Arte Digital</h1>
                        <p className="slogan-text">
                            Somos la tienda por excelencia para la compra y venta de arte digital a nivel mundial.
                        </p>
                        <p className="little-bit-more">
                            Contamos con:
                        </p>
                        <div className="stadistics">
                            <div className="a-stadistic-for">
                                <h2>999,000</h2>
                                <p>Dibujos en venta</p>
                            </div>
                            <div className="a-stadistic-for">
                                <h2>2,000</h2>
                                <p>Artistas</p>
                            </div>
                            <div className="a-stadistic-for">
                                <h2>10,000</h2>
                                <p>Compradores</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}