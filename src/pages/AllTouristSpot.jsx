import { useLoaderData } from "react-router-dom"
import TouristSpotCard from "../components/TouristSpotCard";
import { useState } from "react";

const AllTouristSpot = () => {
  const touristSpotLoader = useLoaderData();
  //console.log(touristSpotLoader);
  const [sortOrder, setSortOrder] = useState("asc"); // State for sorting order
  const [sortedTouristSpots, setSortedTouristSpots] = useState([...touristSpotLoader]); // State for sorted tourist spots

  // Function to handle sorting based on average cost
  const handleSort = () => {
    const sorted = [...sortedTouristSpots].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.average_cost - b.average_cost;
      } else {
        return b.average_cost - a.average_cost;
      }
    });
    setSortedTouristSpots(sorted);
  };


  return (
    <>
      <div className="">
        <div className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="text-center">
              <h2 className="text-4xl text-black font-bold bg-accent p-10 mb-10">All Tourists Spot</h2>
              <div className="">
                {/* Dropdown for sorting */}
                <select onChange={(e) => {setSortOrder(e.target.value); handleSort();}}>
                  <option value="asc">Ascending Average Cost</option>
                  <option value="desc">Descending Average Cost</option>
                </select>
              </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 px-5">
          {
            sortedTouristSpots.map(touristSpot => <TouristSpotCard key={touristSpot._id} touristSpot={touristSpot}></TouristSpotCard>)
          }
        </div>

      </div>
    </>
  )
}

export default AllTouristSpot