import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CategoryCarousel.css';

// Importar imágenes de ejemplo (puedes usar las tuyas)
import img1 from './images/img1.png'
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/example.png';

const categories = [
  { id: 1, title: 'Space Experiences', creator: 'Inafox', img: img1, categor: 'Ilustración' },
  { id: 2, title: 'Cat in Troubles', creator: 'Darkyapper', img: img2, categor: 'Arte Digital' },
  { id: 3, title: 'Blaidd from Elden Ring', creator: 'Nekogaki', img: img3, categor: 'FanArt' },
  { id: 4, title: 'Winter Night', creator: 'Scarlanya', img: img4, categor: 'Ilustración' },
  { id: 5, title: 'Amanda Jhones', creator: 'Makoto', img: img5, categor: 'Cartoon' },
  { id: 6, title: "Howl's Castle", creator: 'Cosmicunicorn', img: img6, categor: 'Ilustración' },
  { id: 7, title: "Mr. Wolf's Bets", creator: 'PngX', img: img7, categor: 'FanArt' },
  { id: 8, title: "Example", creator: 'aDumbUser', img: img8, categor: 'NSFW' },
];

export default function CategoryCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="custom-carousel category-carousel text-white py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Tendencias en <span className="text-ccsa">Todas las Categorías</span>
        </h2>

        <Slider {...settings}>
          {categories.map((category) => (
            <div key={category.id} className="p-4">
              <div className="category-card relative rounded-lg shadow-lg overflow-hidden">
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-full h-72 object-cover filter brightness-75"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-60 w-full text-white">
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="text-sm text-gray-300">Creador: {category.creator}</p>
                  <p className="text-sm text-gray-400">Categoria: {category.categor}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
