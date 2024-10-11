import React from 'react';
import './NewsLetterSection.css'; // Opcional: Para estilos adicionales
// Imágenes de ejemplo (asegúrate de tener imágenes en la carpeta)
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';

export default function NewsletterSection() {
  return (
    <section className="custom-nsl-sc newsletter-section text-white py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex space-x-4 justify-center md:justify-start">
          <div className="card overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            <img src={img1} alt="Card 1" className="w-40 h-60 object-cover" />
          </div>
          <div className="card overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            <img src={img2} alt="Card 2" className="w-40 h-60 object-cover" />
          </div>
          <div className="card overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            <img src={img3} alt="Card 3" className="w-40 h-60 object-cover" />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-nls mb-4">
            Suscríbete A Nuestro <span className="text-blue-500">Boletín</span> Para Estar Enterado De Todo
          </h2>
          <p className="p-nls text-gray-400 mb-8">
            Suscríbete y recibe noticias de Arte Vivo Market, y de tus artistas favoritos.
          </p>
          <div className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-80 px-4 py-3 rounded-l-lg bg-gray-700 text-white focus:outline-none border border-gray-600 focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-r-lg hover:bg-blue-700 transition duration-200">
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
