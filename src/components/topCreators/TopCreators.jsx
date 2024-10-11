import React from 'react';
import './TopCreators.css'; // Opcional: Si quieres agregar estilos personalizados

// Imágenes de ejemplo (puedes usar las tuyas)
import oselotti from './artists/oselotti.png';
import foxstep from './artists/foxstep.png';
import susan from './artists/susan.png';
import darky from './artists/darky.png';
import amalia from './artists/amalia.png';
import tangerine from './artists/tangerine.png';
import lopez from './artists/lopez.png';
import personal from './artists/personal.png';

const creatorsData = [
  { id: 1, name: 'Oselotti', sales: '$963K MXN', img: oselotti },
  { id: 2, name: 'Foxstep', sales: '$782K MXN', img: foxstep },
  { id: 3, name: 'Susan Hazaki', sales: '$725K MXN', img: susan },
  { id: 4, name: 'Darkypapper', sales: '$699K MXN', img: darky },
  { id: 5, name: 'Amalia Solorzano', sales: '$648K MXN', img: amalia },
  { id: 6, name: 'Tangerine', sales: '$587K MXN', img: tangerine },
  { id: 7, name: 'Lopez Mateos', sales: '$522K MXN', img: lopez },
  { id: 8, name: 'PersonalBest', sales: '$430K MXN', img: personal },
];

export default function TopCreators() {
  return (
    <section className="custom-top-section text-white py-16 px-6">
      <div className="container mx-auto">
        {/* Título de la sección */}
        <h2 className="title-tps text-4xl mb-4">Top Creadores</h2>
        <p className="text-lg mb-8">¡Conoce a Nuestros Creadores Top!</p>
        {/* Contenedor de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {creatorsData.map((creator, index) => (
            <div key={creator.id} className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition duration-300">
              <span className="text-gray-400 text-2xl font-bold mb-2">#{index + 1}</span>
              <img
                src={creator.img}
                alt={creator.name}
                className="rounded-full w-24 h-24 mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{creator.name}</h3>
              <p className="text-gray-400">Ventas: {creator.sales}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
