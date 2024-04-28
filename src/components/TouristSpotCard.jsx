import { Link } from "react-router-dom"

const TouristSpotCard = ({touristSpot}) => {
    const {_id, tourists_spot_name, image, average_cost, totaVisitorsPerYear, travel_time, seasonality } = touristSpot
    return (
        <>
            <div className="py-20">
            {/* card start */}
            <div className="cardbg-base-100 shadow-xl image-full h-[500px]">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title capitalize">{tourists_spot_name}</h2>
                    <div className="flex justify-between">
                        <div className="">
                            <p><span className="font-bold">Average Cost: </span>{average_cost} TK.</p>
                            <p><span className="font-bold">Total Visitor: </span>{totaVisitorsPerYear} per year</p>
                        </div>
                        <div className="">
                            <p><span className="font-bold">Travel Time: </span>{travel_time} days</p>
                            <p className="capitalize"><span className="font-bold">Season: </span>{seasonality}</p>
                        </div>
                    </div>
                    
                    
                    <div className="card-actions justify-end">
                        <Link to={`/all-tourist-spot/${_id}`}>
                            <button className="btn btn-accent">View Details</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
            {/* card end */}
            </div>
        </>
    )
}

export default TouristSpotCard