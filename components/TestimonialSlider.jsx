import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/bk.jpg",
    name: "Birendra Karn",
    position: "Chemistry Teacher",
    message:
      "Terabyte Academic ERP software is a powerful tool that can significantly enhance the efficiency, transparency, and effectiveness of educational institutions, ultimately leading to a better educational experience for both students and staff.",
  },
  {
    image: "/ac.jpg",
    name: "Arbind Acharya",
    position: "Doctor",
    message:
      " Terabyte Hospital ERP software is a comprehensive solution that can significantly improve the efficiency, effectiveness, and quality of healthcare delivery. It integrates all critical hospital functions into a single system, enhancing operational efficiency, patient care, and financial management.",
  },
  {
    image: "/pk.jpg",
    name: "Pratik Pokharel",
    position: "UI/UX Designer",
    message:
      "Effective website design and digital marketing are essential for building a strong online presence, attracting and engaging visitors, and converting them into loyal customers. By combining aesthetically pleasing design with strategic digital marketing efforts, businesses can achieve significant growth and success in the digital landscape.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
