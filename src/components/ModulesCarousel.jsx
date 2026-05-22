import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  { src: "/img/modules/slide1.jpg", alt: "Módulo Uniconet" },
  { src: "/img/modules/slide2.jpg", alt: "Módulo Genera" },
  { src: "/img/modules/slide3.jpg", alt: "Módulo Wemeik" },
  { src: "/img/modules/slide4.jpg", alt: "Desarrollo a Medida" },
];

export default function ModulesCarousel() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect={"fade"}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      className="modules-carousel"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="carousel-image-container">
            <img 
              src={image.src} 
              alt={image.alt} 
              onError={(e) => {
                // Fallback image if the user hasn't uploaded the files yet
                e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop";
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
