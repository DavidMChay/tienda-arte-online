import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaArrowRight } from 'react-icons/fa';
import './Footer.css';
import logo from './artevivo-logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="custom-footer text-gray-300 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-4">
          <img src={logo} alt="Arte Vivo Market Logo" className="h-12 w-auto mb-4" />
          <p>Ingrese su correo para suscribirse a ArtVivo y recibir las ultimas noticias.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
              <FaArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Arte Vivo</h4>
          <ul className="space-y-2">
            <li><Link to="/descubre" className="hover:text-white">Descubre</Link></li>
            <li><a href="#" className="hover:text-white">Arte Digital</a></li>
            <li><a href="#" className="hover:text-white">Nosotros</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Mi Cuenta</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Perfil</a></li>
            <li><a href="#" className="hover:text-white">Favoritos</a></li>
            <li><a href="#" className="hover:text-white">Lista de Deseos</a></li>
            <li><a href="#" className="hover:text-white">Mis Colecciones</a></li>
            <li><a href="#" className="hover:text-white">Ajustes</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Recursos</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Estado</a></li>
            <li><a href="#" className="hover:text-white">Patrocinadores</a></li>
            <li><a href="#" className="hover:text-white">Noticias</a></li>
          </ul>
        </div>
      </div>

  
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        <p>
          <a href="#" className="hover:text-white">Términos</a> |{' '}
          <a href="#" className="hover:text-white">Política de Privacidad</a>
        </p>
        <p className="mt-2">© ArteVivo Market, Inc. @ All Rights Reserved</p>
      </div>
    </footer>
  );
}
