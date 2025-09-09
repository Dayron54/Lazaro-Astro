import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const clientes = [
  { nombre: "Don Pedro", img: "/logos/Logo-donPedro.png" },
  { nombre: "Herbolario", img: "/logos/Logo-herbolario1.png" },
  { nombre: "Comarca", img: "/logos/Logo-comarca1.png" },
  { nombre: "Colfamil", img: "/logos/Logo-colfamil1.jpg" },
  { nombre: "Creperia", img: "/logos/Logo-Creperia.png" }
];

export default function ClientesCarousel() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}   // 🔹 siempre empieza en 1
      breakpoints={{
        768: { slidesPerView: 1 },    // tablet
        1200: { slidesPerView: 1 }    // desktop
      }}
      className="carrusel"
    >
      {clientes.map((cliente) => (
        <SwiperSlide key={cliente.nombre}>
          <div className="logo-box">
            <img src={cliente.img} alt={cliente.nombre} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
