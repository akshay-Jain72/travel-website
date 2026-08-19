import React from 'react';
import "./Gallery.css";

const Gallery = () => {
  const galleryItems = [
    { img: 'images/gallerymum1.avif', desc: "Explore Mumbai's coastal charm with the Gateway of India by the sea." },
    { img: 'images/galleryparis2.jpg', desc: "Experience the historic Arc de Triomphe, a symbol of Parisian pride." },
    { img: 'images/gallery3hawai.avif', desc: "Relax on Hawaii's beaches with sunny skies and peaceful waves." },
    { img: 'images/gallary4tokyo.avif', desc: "Feel the energy of Tokyo's neon streets and buzzing nightlife." },
    { img: 'images/gallery5egypt.jpg', desc: "Enjoy a traditional meal in Egypt, full of flavors and culture." },
    { img: 'images/gallery6sydney.jpg', desc: "Admire Sydney's harbour view with its world-famous landmarks." },
    { img: 'images/gallery7mum.avif', desc: "Get close to Mumbai's heart at the majestic Gateway of India." },
    { img: 'images/gallery8tokyo.avif', desc: "Stroll through Tokyo's vibrant street markets full of life." },
    { img: 'images/gallery9hawai.avif', desc: "Capture joyful beach moments under Hawaii's warm sunshine." }
  ];

  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        <span>g</span><span>a</span><span>l</span><span>l</span><span>e</span><span>r</span><span>y</span>
      </h1>

      <div className="box-container">
        {galleryItems.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.img} alt="" />
            <div className="content">
              <h3>amazing places</h3>
              <p>{item.desc}</p>
              <a href="#" className="btn">See More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;