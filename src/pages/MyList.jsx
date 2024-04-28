import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";

const MyList = () => {
  const userTouristLoader = useLoaderData();
  console.log(userTouristLoader);
  
  return (
    <>
      <div className="h-screen">
        <div className="md:w-3/4 lg:w-1/2 mx-auto">
            <div className="text-center">
                <h2 className="text-4xl bg-accent p-10 capitalize">My all tourist spots</h2>
            </div>
        </div>

        <div className="p-20">
          <div className="overflow-x-auto w-3/4 mx-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-xl">
                  <th>Tourist Spot Name</th>
                  <th>Country Name</th>
                  <th>Location</th>
                  <th>Seasonality</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  userTouristLoader.map(userSpot => <tr key={userSpot._id} className="hover capitalize">
                    
                    <td>{userSpot.tourists_spot_name}</td>
                    <td>{userSpot.country_name}</td>
                    <td>{userSpot.location}</td>
                    <td>{userSpot.seasonality}</td>
                    <td className="space-x-3">
                      <Link to='/update-tourist-spot'>
                        <button className="btn btn-accent">Update</button>
                      </Link>
                      
                      <button className="btn btn-neutral">Delete</button>
                    </td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyList