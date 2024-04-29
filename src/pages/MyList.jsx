import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const MyList = () => {
  const {user} = useContext(AuthContext);
  const [userTourist, setUserTourist] = useState([]);

  useEffect(() => {
  
      // Fetch tourist spots for the logged-in user
      fetch(`http://localhost:5555/user/tourist-spots/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setUserTourist(data))
        .catch((error) => console.error("Error fetching tourist spots:", error));

  }, [user]);


  const handledelete = (_id) => {
    console.log(_id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
          //console.log('delete confirm');
          fetch(`http://localhost:5555/tourist-spot/${_id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your tourist spot has been deleted.",
                    icon: "success"
                });
                const remaining = userTourist.filter(cof => cof._id !== _id)
                setUserTourist(remaining);
            }
          })
        }
      });
  }
  
  return (
    <>
      <div className="">
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
                  userTourist.map(userSpot => <tr key={userSpot._id} className="hover capitalize">
                    
                    <td>{userSpot.tourists_spot_name}</td>
                    <td>{userSpot.country_name}</td>
                    <td>{userSpot.location}</td>
                    <td>{userSpot.seasonality}</td>
                    <td className="space-x-3">
                      <Link to='/update-tourist-spot'>
                        <button className="btn btn-accent">Update</button>
                      </Link>
                      
                      <button onClick={() => {handledelete(userSpot._id)}} className="btn btn-neutral">Delete</button>
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