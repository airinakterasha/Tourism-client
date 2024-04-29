import { Link } from "react-router-dom"

const CountryTouristItem = ({countryTourist}) => {
  return (
    <>
        <div className="">
            <div className="card bg-base-100 shadow-xl">
                <div className="p-5">
                    <div className="">
                        <h2 className="card-title">{countryTourist.tourists_spot_name}</h2>
                        <p className="capitalize">{countryTourist.country_name}</p>
                        <p>{countryTourist.location}</p>
                        <p>{countryTourist.short_description}</p>
                        <p>{countryTourist.average_cost}</p>
                        <p>{countryTourist.seasonality}</p>
                        <div className="card-title justify-end">
                            <Link to={`/all-tourist-spot/${countryTourist._id}`}>
                                <button className="btn btn-accent">View Details</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                <figure><img src={countryTourist.image} alt="Shoes" /></figure>
            </div>
        </div>
    </>
  )
}

export default CountryTouristItem