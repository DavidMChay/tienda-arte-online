import React from 'react';
import './InfoSection.css'; // Si necesitas agregar estilos personalizados

export default function InfoSection() {
  return (
    <section className="info-section bg-gradient-to-r from-purple-700 via-purple-900 to-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Título principal */}
        <h2 className="text-4xl font-bold mb-4">
          Tenemos A Los Mejores <span className="text-purple-400">Artistas</span>
        </h2>
        <p className="text-lg mb-8">
          Este es el lugar para comenzar a ganar con tu arte.
        </p>
        
        {/* Contenedor de estadísticas */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
          {/* Elemento de Estadísticas */}
          <div className="stat-item">
            <h3 className="text-5xl font-extrabold">999,000</h3>
            <p className="text-gray-300">Dibujos digitales</p>
          </div>
          <div className="stat-item">
            <h3 className="text-5xl font-extrabold">2,000</h3>
            <p className="text-gray-300">Artistas</p>
          </div>
          <div className="stat-item">
            <h3 className="text-5xl font-extrabold">10,000</h3>
            <p className="text-gray-300">Compradores</p>
          </div>
        </div>

        {/* Botón de llamada a la acción */}
        <button className="bg-transparent border border-purple-400 text-purple-400 hover:bg-purple-600 hover:border-purple-600 hover:text-white font-medium rounded-lg text-lg px-8 py-3 transition duration-300">
          Empieza a Ganar
        </button>
      </div>
    </section>
  );
}
