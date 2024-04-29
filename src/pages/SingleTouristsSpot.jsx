import { useLoaderData } from "react-router-dom"


const SingleTouristsSpot = () => {
    const loadTouristSpot = useLoaderData();
    console.log(loadTouristSpot);
    const {_id, image, tourists_spot_name, country_name, location, average_cost, short_description, seasonality, travel_time, totaVisitorsPerYear, user_name, email} = loadTouristSpot;
    console.log('Id will not show on details page but we neeed this for capture tourist spot', _id);
    return (
        <>

            {/* start */}
          
            {/* end */}
            <div className="">
                <div className="lg:w-1/2 mx-auto">
                    <div className="text-center">
                        <h2 className="text-4xl bg-accent p-10">{tourists_spot_name}</h2>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="lg:w-full p-10">
                        <img src={image} alt="" className=""/>
                    </div>
                    <div className="px-10  md:px-2 md:py-10 lg:p-20 lg:space-y-5 lg:me-36">
                        <div className="lg:space-y-5 ">
                            <p><span className="font-bold">Tourist Spot Name: </span>{tourists_spot_name}</p>
                            <p><span className="font-bold capitalize">Country Name: </span>{country_name}</p>
                            <p><span className="font-bold">Location: </span>{location}</p>
                        </div>
                        
                        <div className="flex md:flex-col lg:flex-row justify-between gap-10 md:gap-0 lg:gap-10">
                            <div className="lg:space-y-5">
                                <p><span className="font-bold">Average Cost: </span>{average_cost} TK.</p>
                                <p><span className="font-bold">Total Visitor: </span>{totaVisitorsPerYear} per year</p>
                            </div>
                            <div className="lg:space-y-5">
                                <p><span className="font-bold">Travel Time: </span>{travel_time} days</p>
                                <p className="capitalize"><span className="font-bold">Season: </span>{seasonality}</p>
                            </div>
                        </div>
                        <p><span className="font-bold">Author Name: </span> {user_name}</p>
                        <p><span className="font-bold">Author Email: </span>{email}</p>
                        <div className="mb-10">
                            <h3 className="lg:text-2xl"><span className="font-bold">Description: </span>{short_description}</h3>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default SingleTouristsSpot