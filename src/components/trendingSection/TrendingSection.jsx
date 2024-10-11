import React from 'react';
import './TrendingSection.css';
import Art2 from './art/art2.png';
import Art1 from './art/art1.jpg';
import Art3 from './art/art3.jpg';

export default function TrendingSection() {
  return (
    <section className="custom-trending-section">
      <div className="container-ts container mx-auto">
        <h2 className="title-ts text-4xl mb-4">En Tendencia</h2>
        <p className="text-lg mb-8">
          Checa los dibujos en tendencia de esta semana.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <div className="image-container-ts">
              <img src={Art1} alt="A Hyena" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">A Hyena</h3>
              <p className="text-sm text-gray-400">Creador: Babanasaur</p>
              <p className="text-xl mt-2 font-semibold">Precio: $350 MXN</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <div className="image-container-ts">
              <img src={Art2} alt="Yeik Ancient" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">Yeik Ancient</h3>
              <p className="text-sm text-gray-400">Creador: Darkypaper</p>
              <p className="text-xl mt-2 font-semibold">Precio: $600 MXN</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <div className="image-container-ts">
              <img src={Art3} alt="Yeik Ancient" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">Over The Horizon</h3>
              <p className="text-sm text-gray-400">Creador: Oselotti</p>
              <p className="text-xl mt-2 font-semibold">Precio: $4,930 MXN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
