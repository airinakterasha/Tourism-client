import { Link } from "react-router-dom";

const TouristSpotHomePage = ({tourSpot}) => {
    const {_id, tourists_spot_name, image, short_description} = tourSpot;
    
    return (
        <>
            <div className="">
                
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{tourists_spot_name}</h2>
                        <p>{short_description}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/all-tourist-spot/${_id}`}>
                                <button className="btn btn-accent">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TouristSpotHomePage