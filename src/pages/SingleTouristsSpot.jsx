import { useLoaderData } from "react-router-dom"


const SingleTouristsSpot = () => {
    const loadTouristSpot = useLoaderData();
    console.log(loadTouristSpot);
    const {image, tourists_spot_name, country_name, location, average_cost, short_description, seasonality, travel_time, totaVisitorsPerYear, user_name, email} = loadTouristSpot;
    return (
        <>
            <div className="h-screen">
                <div className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="text-center">
                        <h2 className="text-4xl bg-accent p-10">{tourists_spot_name}</h2>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/2 p-10">
                        <img src={image} alt="" />
                    </div>
                    <div className="p-20 space-y-5">
                        <div className="space-y-5">
                            <p><span className="font-bold">Country Name: </span>{country_name}</p>
                            <p><span className="font-bold">Location: </span>{location}</p>
                        </div>
                        
                        <div className="flex justify-between gap-10">
                            <div className="space-y-5">
                                <p><span className="font-bold">Average Cost: </span>{average_cost} TK.</p>
                                <p><span className="font-bold">Total Visitor: </span>{totaVisitorsPerYear} per year</p>
                            </div>
                            <div className="space-y-5">
                                <p><span className="font-bold">Travel Time: </span>{travel_time} days</p>
                                <p className="capitalize"><span className="font-bold">Season: </span>{seasonality}</p>
                            </div>
                        </div>
                        
 
                        <p><span className="font-bold">Author Name: </span> {user_name}</p>
                        <p><span className="font-bold">Author Email: </span>{email}</p>
                    </div>
                </div>
                <div className="p-5">
                    <h3 className="text-2xl">{short_description}</h3>
                </div>
            </div>
        </>
    )
}

export default SingleTouristsSpot