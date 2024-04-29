import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";


const CountryTourist = () => {
    const tourist = useLoaderData();
    console.log(tourist);
    return (
        <>
            <div className="">
                <div className="md:w-3/4 lg:w-1/2 mx-auto mb-10">
                    <div className="text-center pt-20">
                        <h2 className="text-4xl bg-accent p-10">Tourist Spot</h2>
                    </div>
                </div>
                <div className="md:p-10">
                    
                    {
                        tourist.map(countryTourist => <div key={countryTourist._id} className="">
                            
                            <div className="">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <div className="flex justify-between p-5">
                                        <div className="">
                                            <h2 className="card-title">{countryTourist.tourists_spot_name}</h2>
                                            <p>{countryTourist.location}</p>
                                        </div>
                                        <div className="">
                                            <Link to={`/all-tourist-spot/${countryTourist._id}`}>
                                                <button className="btn btn-accent">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <figure><img src={countryTourist.image} alt="Shoes" /></figure>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}

export default CountryTourist