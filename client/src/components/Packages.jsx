import "./Packages.css";
const packages = [
  {
    img: "/images/mum1.avif",
    place: "mumbai",
    desc: "Discover the charm of Mumbai, where historic landmarks meet modern life.",
    price: 90,
    oldPrice: 120
  },
  {
    img: "/images/syd1.avif",
    place: "sydney",
    desc: "Discover the beauty of Sydney, including its famous Opera House and Harbour Bridge.",
    price: 90,
    oldPrice: 120
  },
  {
    img: "/images/hawaii4.avif",
    place: "hawaii",
    desc: "Escape to paradise in Hawaii with beaches, volcanic landscapes, and rainforests.",
    price: 90,
    oldPrice: 120
  },
  {
    img: "/images/paris1.avif",
    place: "paris",
    desc: "Fall in love with Paris, the city of lights, art, fashion, and cuisine.",
    price: 90,
    oldPrice: 120
  },
  {
    img: "/images/tokyo2.avif",
    place: "tokyo",
    desc: "Experience Tokyo, where innovation, tradition, temples, and neon streets meet.",
    price: 90,
    oldPrice: 120
  },
  {
    img: "/images/egypt2.avif",
    place: "egypt",
    desc: "Explore ancient Egyptian wonders including pyramids, the Sphinx, and the Nile.",
    price: 90,
    oldPrice: 120
  }
];

function Packages() {
  return (
    <section className="packages" id="packages">
      <h1 className="heading">
        <span>p</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
        <span>a</span>
        <span>g</span>
        <span>e</span>
        <span>s</span>
      </h1>

      <div className="box-container">
        {packages.map((pkg) => (
          <div className="box" key={pkg.place}>
            <img src={pkg.img} alt={pkg.place} />

            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" />
                {pkg.place}
              </h3>

              <p>{pkg.desc}</p>

              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>

              <div className="price">
                ${pkg.price}.00 <span>${pkg.oldPrice}.00</span>
              </div>

              <a className="btn" href="#book">
                book now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;