import { useLoaderData, useParams } from "react-router-dom"
import CountryTouristItem from "./CountryTouristItem";

const CountryTourist = () => {
    const tourist = useLoaderData();
    const { name } = useParams();
    console.log(tourist);
    return (
        <>
            <div className="">
                <div className="md:w-3/4 lg:w-1/2 mx-auto mb-10">
                    <div className="text-center pt-20">
                        <h2 className="text-4xl bg-accent p-10 font-bold uppercase">{name}</h2>
                    </div>
                </div>
                <div className="md:p-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    
                    {
                        tourist.map(countryTourist => <CountryTouristItem key={countryTourist._id} countryTourist={countryTourist}></CountryTouristItem>)
                    }
                </div>
            </div>
        </>
    )
}

export default CountryTourist