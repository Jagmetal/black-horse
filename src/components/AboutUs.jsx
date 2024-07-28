import React from 'react';
import Slider from 'react-slick';
import '../styles/AboutUs.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  '/blackhorse-project/assets/img1.jpg',
  '/blackhorse-project/assets/img2.jpg',
  '/blackhorse-project/assets/img3.jpg',
  '/blackhorse-project/assets/img6.jpg',
];

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="about-us">
      <h2>About Us</h2>
      <p>
        Black Horse Logistics Group Pty Ltd, based in the country town of Shepparton, Victoria, is a dynamic trucking company founded by two brothers in 2020. 
        Located at 565 Old Dookie Rd, Shepparton East, VIC 3631, the company specializes in long-haul freight, serving a wide range of transportation needs across various regions. 
        Committed to supporting countryside communities, Black Horse Logistics not only provides essential freight services but also generates employment opportunities within these areas. 
        Through relentless hard work and dedication, the company has been experiencing consistent growth year after year, establishing itself as a trusted name in the logistics industry.
      </p>
      <Slider {...settings} className="aboutus-slider">
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default AboutUs;
