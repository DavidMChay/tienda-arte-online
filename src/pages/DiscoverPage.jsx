import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function DiscoverPage() {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto py-16 px-6">
          <h1 className="text-4xl font-bold mb-8">Catálogo - Descubre</h1>
          <p className="text-lg mb-4">Explora el mejor arte digital disponible en nuestra plataforma.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
