import HomeSlider from '../components/HomeSlider';
import TouristSpotHomePage from '../components/TouristSpotHomePage';
import CountryView from '../countryComponents/CountryView';
// Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const country = useLoaderData();
  console.log(country)
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5555/tourist-spot')
    .then(res=> res.json())
    .then(data =>{
      console.log(data);
      setSlider(data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <>
      {/* Slider section start */}
      <section className="bg-accent">
        <HomeSlider slider={slider}></HomeSlider>
      </section>
      {/* Slider section end */}
      {/* Tourists Spots */}
      <section className='py-20 px-10'>
        <div className="text-center text-3xl">
          <h2 className="font-bold mb-10">Tourist Spot</h2>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
          {
            slider.slice(0,8).map(tourSpot => <TouristSpotHomePage key={tourSpot._id} tourSpot={tourSpot}></TouristSpotHomePage>)
          }
          
        </div>   
      </section>
      {/* Tourists end */}
      <section className='py-20'>
        <div className="text-center text-3xl py-10">
          <h2 className="font-bold">Country Section</h2>
        </div>
        <div className="px-10">
          <div className="grid md:grid-cols-3 gap-10">
            {
              country.map(countryname => <CountryView key={countryname._id} countryname={countryname} slider={slider}></CountryView> )
            }
          </div>
        </div>
        
      </section>
    </>
  )
}

export default Home