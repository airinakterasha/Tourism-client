import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const TouristSpotHomePage = ({tourSpot}) => {
    const {_id, tourists_spot_name, image, short_description} = tourSpot;
    
    return (
        <>
            <div className="">
                
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><Slide direction={'left'} delay={2000}><img src={image} alt={tourists_spot_name} /></Slide></figure>
                    <div className="card-body">
                        <Slide direction={'right'} delay={2000}>
                        <h2 className="card-title">{tourists_spot_name}</h2>
                        <p>{short_description}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/all-tourist-spot/${_id}`}>
                                <button className="btn btn-accent">View Details</button>
                            </Link>
                        </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TouristSpotHomePage