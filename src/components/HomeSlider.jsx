
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
                        <img src={banner.image} alt="" />
                    </div>
                    <div className="py-20 lg:p-40 md:space-y-10 text-black">
                        <h1>{banner.tourists_spot_name}</h1>
                        <h1 className="mb-5 text-2xl md:text-5xl font-bold">{banner.country_name}</h1>
                        <p className="mb-5 lg:text-2xl md:px-14">{banner.location}</p>
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