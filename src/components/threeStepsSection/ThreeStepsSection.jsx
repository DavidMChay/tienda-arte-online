import React from 'react';
import { FaUpload, FaInfoCircle, FaTags } from 'react-icons/fa';
import './ThreeStepsSection.css';

export default function ThreeStepSection() {
  return (
    <section className="custom-tss text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="title-tss text-4xl mb-12">Empieza en solo 3 pasos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="step-card border border-gray-600 rounded-lg p-8 bg-gray-800 hover:bg-gray-700 transition duration-300">
            <FaUpload className="text-purple-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Carga tu mejor dibujo</h3>
            <p className="text-gray-300">
              Sube tus archivos creando tu cuenta.
            </p>
          </div>

          <div className="step-card border border-gray-600 rounded-lg p-8 bg-gray-800 hover:bg-gray-700 transition duration-300">
            <FaInfoCircle className="text-green-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Ingresa la información</h3>
            <p className="text-gray-300">
              Llena el formulario con la información de tu dibujo.
            </p>
          </div>

          <div className="step-card border border-gray-600 rounded-lg p-8 bg-gray-800 hover:bg-gray-700 transition duration-300">
            <FaTags className="text-red-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Obten ganancias y crece</h3>
            <p className="text-gray-300">
              Elige tu audiencia, comienza a vender y haz crecer tu comunidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
