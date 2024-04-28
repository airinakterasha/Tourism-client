

const AddTouristsSpot = () => {
  return (
    <div>AddTouristsSpot
      <div className="">
      <div className="bg-[#F4F5F8] md:w-3/4 lg:w-1/2 mx-auto">
                <div className="text-center pt-20">
                    <h2 className="text-4xl bg-accent p-10">Add Tourists Spot</h2>
                </div>
                <div className="">
                    <form className="card-body ">
                        <div className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Image Url" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex justify-around gap-5">
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Tourist Spot Name</span>
                                </label>
                                <input type="text" name="tourists_spot_name" placeholder="Write Tourist Spot Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Country Name</span>
                                </label>
                                <input type="text" name="country_name" placeholder="Country Name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex justify-around gap-5">
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" name="location" placeholder="Write Location" className="input input-bordered" required />
                            </div>
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Average Cost</span>
                                </label>
                                <input type="text" name="average_cost" placeholder="Average Cost" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex justify-around gap-5">
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input type="text" name="short_description" placeholder=" Short Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Seasonality</span>
                                </label>
                                <input type="text" name="seasonality" placeholder="Write Seasonality" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex justify-around gap-5">
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Travel Time</span>
                                </label>
                                <input type="text" name="travel_time" placeholder="Travel Time" className="input input-bordered" required />
                            </div>
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Total Visitors Per Year</span>
                                </label>
                                <input type="text" name="totaVisitorsPerYear" placeholder="Total Visitors Per Year" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex justify-around gap-5">
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Write Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control grow w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Add Tourists Spot</button>
                        </div>
                    </form>
                    
                    
                </div>
            </div>
      </div>
    </div>
  )
}

export default AddTouristsSpot