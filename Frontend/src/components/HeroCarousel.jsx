import "react";
import Slider from "react-slick";
import Image1 from "../assets/ImageCarousel/feliphe-schiarolli-hes6nUC1MVc-unsplash.jpg";
import Image2 from "../assets/ImageCarousel/jeffrey-hamilton-jrRe6er0pY0-unsplash.jpg";
import Image3 from "../assets/ImageCarousel/jeswin-thomas--hgJu2ykh4E-unsplash.jpg";
import Logo from "../assets/SchoolLogos/School_logo.png";

const HeroImageCarousel = () => {
  const settings = {
    dots: false, // Disable dots for navigation
    infinite: true, // Infinite scrolling
    speed: 2000, // Transition speed
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true,
    autoplaySpeed: 4000, // Speed for autoplay in milliseconds
    cssEase: "linear", // Smooth animation
    arrows: false, // Remove navigation arrows
  };

  const images = [Image1, Image2, Image3];

  return (
    <div className="relative bg-gray-100 mt-16">
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 p-4">
        {/* Logo above the text */}
        <img
          src={Logo}
          alt="Logo"
          className="h-20 sm:h-28 md:h-36 lg:h-40 mb-4"
        />
        {/* Heading */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide fade-in text-center">
          Welcome to R/Pathagama Maha Vidyalaya
        </h1>
        {/* Paragraph */}
        <p className="text-white mt-3 font-thin max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-8">
          where we nurture young minds and guide them toward a brighter future with our dedicated faculty
          and excellent facilities.
        </p>
      </div>


      {/* Carousel */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
              {/* Background Image */}
              <div
                className="h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroImageCarousel;
