"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Card } from "../../components/Card";

export function Testimonials() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-hidden my-10 py-20 bg-gradient-to-r from-purple-200 via-blue-100 to-sky-100">
      <Swiper
        spaceBetween={0}
        slidesPerView={slidesPerView}
        modules={[Navigation]}
        navigation
        style={{ overflow: "visible" }}
        className="xl:scale-75"
      >
        {new Array(10).fill(0).map((_, idx) => (
          <SwiperSlide key={idx}>
            {({ isNext }) => (
              <div className={`flex justify-center transform transition-transform duration-300 ${isNext ? "scale-100" : "scale-75"}`}>
                <Card
                  name="NOM Prénom"
                  role="Intitulé du poste + Entreprise"
                  feedback={`e Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l&apos;imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n&apos;a pas fait que survivre cinq siècles, mais s&apos;est aussi adapté à la bureautique informatique, sans que son contenu n&apos;en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.`}
                  image="https://picsum.photos/200"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;