import { useLoaderData } from "react-router-dom"
import TouristSpotCard from "../components/TouristSpotCard";

const AllTouristSpot = () => {
  const touristSpotLoader = useLoaderData();
  console.log(touristSpotLoader);
  return (
    <>
      <div className="">
        <div className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="text-center">
              <h2 className="text-4xl text-black font-bold bg-accent p-10 mb-10">All Tourists Spot</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 px-5">
          {
            touristSpotLoader.map(touristSpot => <TouristSpotCard key={touristSpot._id} touristSpot={touristSpot}></TouristSpotCard>)
          }
        </div>

      </div>
    </>
  )
}

export default AllTouristSpot