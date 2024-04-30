import { Slide } from "react-awesome-reveal";
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HomeSlider = ({slider}) => {

  return (
    <>
      {/* Swiper banner */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          slider?.map(banner => <SwiperSlide key={banner._id}>
            <div className="">
              <div className="hero">
                  <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <Slide direction={'up'} delay={300}>
                        <img src={banner.image} alt="" />
                        </Slide>
                    </div>
                    <div className="py-20 lg:p-40 md:space-y-10 text-black">
                        <Slide direction={'down'} delay={1000}>
                          <h1 className="md:text-2xl font-bold capitalize">{banner.tourists_spot_name}</h1>
                          <h1 className="mb-5 text-2xl md:text-5xl font-bold capitalize">{banner.country_name}</h1>
                          <p className="mb-5 lg:text-2xl md:px-14 font-bold capitalize">{banner.location}</p>
                        </Slide>
                    </div>
                  </div>

              </div>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
      {/* Swiper banner end */}
      
    </>
  )
}

export default HomeSlider   