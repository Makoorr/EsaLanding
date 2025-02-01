"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Card } from "../../components/Card";

export function Testimonials() {
  return (
    <div className="overflow-hidden my-10 py-20 bg-gradient-to-r from-purple-200 via-blue-100 to-sky-100">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        modules={[Navigation]}
        navigation
        style={{ overflow: "visible" }}
      >
        {new Array(10).fill(0).map((_, idx) => (
          <SwiperSlide key={idx} className="swiper-slide">
            <div className="flex justify-center transform transition-transform duration-300">
              <Card
                name="NOM Prénom"
                role="Intitulé du poste + Entreprise"
                feedback={`
                  e Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
                `}
                image="https://via.placeholder.com/150"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}