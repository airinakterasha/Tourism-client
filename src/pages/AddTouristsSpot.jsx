import Swal from 'sweetalert2'

const AddTouristsSpot = () => {

  const handleAddTouristSpot = (e) => {
    e.preventDefault();
    const form = e.target;

    const image = form.image.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const average_cost = form.average_cost.value;
    const short_description = form.short_description.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const user_name = form.user_name.value;
    const email = form.email.value;


    console.log(image, tourists_spot_name, country_name, location, average_cost, short_description, seasonality, travel_time, totaVisitorsPerYear, user_name, email);
    const addTouristSpot = {image, tourists_spot_name, country_name, location, average_cost, short_description, seasonality, travel_time, totaVisitorsPerYear, user_name, email}

    // send data to the server
    fetch('http://localhost:5555/tourist-spot', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addTouristSpot)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'User Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })


  
  }

  return (
    <>
      <div className="py-10">
          <div className="bg-[#F4F5F8] md:w-3/4 lg:w-1/2 mx-auto">
                <div className="text-center pt-10">
                    <h2 className="text-4xl bg-accent p-10">Add Tourists Spot</h2>
                </div>
                <div className="">
                    <form onSubmit={handleAddTouristSpot} className="card-body ">
                        <div className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" name="image" placeholder="Image Url" className="input input-bordered"/>
                            </div>
                        </div>
                        <div className="flex justify-around gap-5">
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Tourist Spot Name</span>
                                </label>
                                <input type="text" name="tourists_spot_name" placeholder="Write Tourist Spot Name" className="input input-bordered"/>
                            </div>
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Country Name</span>
                                </label>
                                <input type="text" name="country_name" placeholder="Country Name" className="input input-bordered"/>
                            </div>
                        </div>
                        <div className="flex justify-around gap-5">
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" name="location" placeholder="Write Location" className="input input-bordered"/>
                            </div>
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Average Cost</span>
                                </label>
                                <input type="text" name="average_cost" placeholder="Average Cost" className="input input-bordered"/>
                            </div>
                        </div>
                        <div className="flex justify-around gap-5">
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input type="text" name="short_description" placeholder=" Short Description" className="input input-bordered"/>
                            </div>
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Seasonality</span>
                                </label>
                                <input type="text" name="seasonality" placeholder="Write Seasonality" className="input input-bordered"/>
                            </div>
                        </div>
                        <div className="flex justify-around gap-5">
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Travel Time</span>
                                </label>
                                <input type="text" name="travel_time" placeholder="Travel Time" className="input input-bordered"/>
                            </div>
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Total Visitors Per Year</span>
                                </label>
                                <input type="text" name="totaVisitorsPerYear" placeholder="Total Visitors Per Year" className="input input-bordered"/>
                            </div>
                        </div>
                        <div className="flex justify-around gap-5">
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Write Your Name" className="input input-bordered"/>
                            </div>
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered"/>
                            </div>
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Add Tourists Spot</button>
                        </div>
                    </form>
                    
                    
                </div>
            </div>
      </div>
    </>
  )
}

export default AddTouristsSpot