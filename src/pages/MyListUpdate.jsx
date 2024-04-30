import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyListUpdate = () => {
    const touristSpot = useLoaderData();
    console.log(touristSpot);
    const {_id, image, tourists_spot_name, country_name, location, average_cost, short_description, seasonality, travel_time, totaVisitorsPerYear} = touristSpot
    
    const handleUpdateTourist = (e) => {
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

        const newTouristSpot = {image, tourists_spot_name, country_name, location, average_cost, short_description, seasonality, travel_time, totaVisitorsPerYear};
        console.log(newTouristSpot);

        // send data to the server
        fetch(`https://tourism-server-site-blond.vercel.app/tourist-spot/${_id}`, {
            method: 'PUT',
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(newTouristSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
            Swal.fire({
                title: 'Success!',
                text: 'Your Tourist Spot Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Excellent'
            })
            }
        })
    }


    return (
        <>
            <div className="py-10">
            <div className="bg-[#F4F5F8] md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="text-center pt-10">
                        <h2 className="text-4xl bg-accent p-10">Update Tourists Spot</h2>
                    </div>
                    <div className="">
                        <form onSubmit={handleUpdateTourist} className="card-body ">
                            <div className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" name="image" defaultValue={image} placeholder="Image Url" className="input input-bordered"/>
                                </div>
                            </div>
                            <div className="flex justify-around gap-5">
                                <div className="form-control grow w-full">
                                    <label className="label">
                                        <span className="label-text">Tourist Spot Name</span>
                                    </label>
                                    <input type="text" name="tourists_spot_name" defaultValue={tourists_spot_name} placeholder="Write Tourist Spot Name" className="input input-bordered"/>
                                </div>
                                <div className="form-control grow w-full">
                                    <label className="label">
                                        <span className="label-text">Country Name</span>
                                    </label>
                                    <input type="text" name="country_name" defaultValue={country_name} placeholder="Country Name" className="input input-bordered"/>
                                </div>
                            </div>
                            <div className="flex justify-around gap-5">
                                <div className="form-control grow w-full">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input type="text" name="location" defaultValue={location} placeholder="Write Location" className="input input-bordered"/>
                                </div>
                                <div className="form-control grow w-full">
                                    <label className="label">
                                        <span className="label-text">Average Cost</span>
                                    </label>
                                    <input type="text" name="average_cost" defaultValue={average_cost} placeholder="Average Cost" className="input input-bordered"/>
                                </div>
                            </div>
                            <div className="flex justify-around gap-5">
                                <div className="form-control grow w-full">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <input type="text" name="short_description" defaultValue={short_description} placeholder=" Short Description" className="input input-bordered"/>
                                </div>
                                <div className="form-control grow w-full">
                                    <label className="label">
                                        <span className="label-text">Seasonality</span>
                                    </label>
                                    <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Write Seasonality" className="input input-bordered"/>
                                </div>
                            </div>
                            <div className="flex justify-around gap-5">
                                <div className="form-control grow w-full">
                                    <label className="label">
                                        <span className="label-text">Travel Time</span>
                                    </label>
                                    <input type="text" name="travel_time" defaultValue={travel_time} placeholder="Travel Time" className="input input-bordered"/>
                                </div>
                                <div className="form-control grow w-full">
                                    <label className="label">
                                        <span className="label-text">Total Visitors Per Year</span>
                                    </label>
                                    <input type="text" name="totaVisitorsPerYear" defaultValue={totaVisitorsPerYear} placeholder="Total Visitors Per Year" className="input input-bordered"/>
                                </div>
                            </div>
                            
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Update Tourists Spot</button>
                            </div>
                        </form>
                        
                        
                    </div>
                </div>
        </div>
        </>
    )
}

export default MyListUpdate