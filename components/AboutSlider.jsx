import {
    RxCrop,
    RxPencil2,
    RxDesktop,
    RxReader,
    RxRocket,
    RxArrowTopRight,
  } from "react-icons/rx";
  import { FreeMode, Pagination } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/react";
  
  import "swiper/css";
  import "swiper/css/free-mode";
  import "swiper/css/pagination";
  
  const serviceData = [
    {
      Icon: RxCrop,
      title: "Development",
      description: "Building innovative digital solutions tailored to your needs.",
    
    },
    {
      Icon: RxPencil2,
      title: "ERP Softwares",
      description: "Efficiently manage your business processes with our tailored ERP solutions.",
    },
    {
      Icon: RxDesktop,
      title: "E-commerce",
      description: "Create seamless online shopping experiences with our e-commerce solutions.",
    },
    {
      Icon: RxReader,
      title: "Digital Marketing",
      description: "Strategically promoting your business across digital platforms for maximum impact.",
    },
    {
      Icon: RxRocket,
      title: "SEO",
      description: "Optimizing your online presence to boost visibility and drive traffic.",
    },
  ];
  
  const AboutSlider = () => {
    return (
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        freeMode
        className="h-[240px] sm:h-[340px]"
      >
        {serviceData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">
                <item.Icon aria-hidden />
              </div>
  
              {/* title & description */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
  
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight
                  className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                  aria-hidden
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  
  export default AboutSlider;
  