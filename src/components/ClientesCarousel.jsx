import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const clientes = [
  { nombre: "Don Pedro", img: "/public/logos/Logo-donPedro.png" },
  { nombre: "Herbolario", img: "/logos/Logo-herbolario.png" },
  { nombre: "Comarca", img: "/logos/Logo-comarca.png" },
  { nombre: "Colfamil", img: "/public/logos/Logo-colfamil.jpeg" }
];

export default function ClientesCarousel() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      slidesPerView={3}
      spaceBetween={30}
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
