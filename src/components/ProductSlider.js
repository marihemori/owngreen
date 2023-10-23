import React from "react";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";
// import required modules
import { Navigation } from "swiper";
// components
import Product from "../components/Product";

const ProductSlider = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      scrollbar={{ draggable: true }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 200,
        },
      }}
      pagination={{
        clickable: false,
      }}
      className="productSlider mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1450px]"
    >
      <>
        {data?.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default ProductSlider;
