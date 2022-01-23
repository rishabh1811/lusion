/* eslint-disable @next/next/no-img-element */
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselItem from "./CarouselItem";

export default function Carousel() {
  return (
    <div className="mb-10">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <CarouselItem>
            <div className="relative">
              <div
                className="text-center 
                            absolute top-2/4 left-[17%]"
              >
                <h1 className="text-5xl mb-4">Best Handmade Goods</h1>
                <p className="text-2xl mb-8 text-gray-500">
                  Made with love and passion
                </p>
                <button
                  className="border border-dark 
                            px-4 py-3 
                          hover:bg-dark hover:text-white 
                            transition duration-300"
                >
                  View all products
                </button>
              </div>

              <img className="" src="/images/slider-1.webp" alt="" />
            </div>
          </CarouselItem>
        </SwiperSlide>



        {/* Slide 2 */}
        <SwiperSlide>
          <CarouselItem>
            <div className="relative">
              <div
                className="text-center 
                            absolute top-2/4 left-[17%]"
              >
                <h1 className="text-5xl mb-4">Best Handmade Goods</h1>
                <p className="text-2xl mb-8 text-gray-500">
                  Made with love and passion
                </p>
                <button
                  className="border border-dark 
                            px-4 py-3 
                          hover:bg-dark hover:text-white 
                            transition duration-300"
                >
                  View all products
                </button>
              </div>

              <img className="" src="/images/slider-2.webp" alt="" />
            </div>
          </CarouselItem>
        </SwiperSlide>




        {/* Slide 3 */}
        <SwiperSlide>
          <CarouselItem>
            <div className="relative">
              <div
                className="text-center 
                            absolute top-2/4 left-[17%]"
              >
                <h1 className="text-5xl mb-4">Best Handmade Goods</h1>
                <p className="text-2xl mb-8 text-gray-500">
                  Made with love and passion
                </p>
                <button
                  className="border border-dark 
                            px-4 py-3 
                          hover:bg-dark hover:text-white 
                            transition duration-300"
                >
                  View all products
                </button>
              </div>

              <img className="" src="/images/slider-3.webp" alt="" />
            </div>
          </CarouselItem>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
