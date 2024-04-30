import { Link } from "react-router-dom"

const CountryTouristItem = ({countryTourist}) => {
  return (
    <>
        <div className="">
            <div className="card bg-base-100">
                <div className="p-5">
                    <div className="space-y-2">
                        <h2 className="card-title capitalize text-2xl">{countryTourist.tourists_spot_name}</h2>
                        <p className="capitalize"><span className="font-bold capitalize">Country Name: </span>{countryTourist.country_name}</p>
                        <p><span className="font-bold">Location: </span>{countryTourist.location}</p>
                        <p><span className="font-bold">Description: </span>{countryTourist.short_description}</p>
                        <p><span className="font-bold">Average Cost: </span>{countryTourist.average_cost}</p>
                        <p><span className="font-bold">Season: </span>{countryTourist.seasonality}</p>
                        <div className="card-title justify-end">
                            <Link to={`/all-tourist-spot/${countryTourist._id}`}>
                                <button className="btn btn-accent">View Details</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                <figure><img src={countryTourist.image} alt={countryTourist.tourists_spot_name} /></figure>
            </div>
        </div>
    </>
  )
}

export default CountryTouristItem