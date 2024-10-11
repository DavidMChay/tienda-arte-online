import React from 'react';
import { FaPaintBrush, FaPencilRuler, FaMusic, FaExclamationCircle } from 'react-icons/fa'; // Importar íconos de react-icons
import './CategoriesSection.css'; // Si necesitas agregar estilos personalizados

// Importar imágenes de ejemplo para las categorías
import digitalArt from './digitalArt.png';
import cartoon from './cartoon.png';
import fanArt from './fanArt.png';
import nsfw from './nsfw.png';

const categories = [
    { id: 1, name: 'Arte Digital', icon: <FaPaintBrush size={32} />, img: digitalArt },
    { id: 2, name: 'Cartoon', icon: <FaPencilRuler size={32} />, img: cartoon },
    { id: 3, name: 'Fan Arts', icon: <FaMusic size={32} />, img: fanArt },
    { id: 4, name: 'NSFW', icon: <FaExclamationCircle size={32} />, img: nsfw },
];

export default function CategoriesSection() {
    return (
        <section className="categories-section text-white py-16 px-6">
            <h2 className="title-cs text-4xl mb-8">Categorías</h2>
            <div className="container mx-auto text-center">
                {/* Contenedor de tarjetas de categorías */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="category-card relative rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                        >
                            {/* Imagen difuminada */}
                            <img
                                src={category.img}
                                alt={category.name}
                                className="w-full h-48 object-cover filter blur-sm brightness-75"
                            />
                            {/* Contenedor del ícono y el nombre */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                {/* Icono de la categoría */}
                                <div className="mb-4">{category.icon}</div>
                                {/* Nombre de la categoría */}
                                <p className="text-xl font-semibold">{category.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
