import { Link } from "react-router-dom";

const CountryView = ({countryname, slider}) => {
    const {_id, countryName, image, flag} = countryname;
    console.log(_id, slider);
    return (
        <>
            <div className="">
                <Link to={`/country-tourist-name/${countryName}`}>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body justify-center content-center">
                        <div className="text-center lg:ps-56">
                            <div className="mb-10">
                                <img src={flag} className="w-20 h-20" alt="" />
                            </div>
                            <h2 className="card-title capitalize">{countryName}</h2>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        </>
    )
}

export default CountryView