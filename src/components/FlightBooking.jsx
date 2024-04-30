import { SlPlane } from "react-icons/sl";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { ImTicket } from "react-icons/im";
import { GiCargoShip } from "react-icons/gi";
const FlightBooking = () => {
  return (
    <>
    {/* grid md:grid-cols-2 lg:grid-cols-4 */}
        <div className="p-10 ">
            <div className="bg-[url('/booking.jpeg')] py-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
                    <div className="card glass text-black">
                        <div className="card-body">
                            <div className="text-5xl">
                                <SlPlane/>
                            </div>
                            <h2 className="card-title">500</h2>
                            <h2 className="card-title">Flight Booking</h2>
                        </div>
                    </div>
                    <div className="card glass text-black">
                        <div className="card-body">
                            <div className="text-5xl">
                                <MdOutlineMapsHomeWork />
                            </div>
                            <h2 className="card-title">175</h2>
                            <h2 className="card-title">Amazing Tour</h2>
                        </div>
                    </div>
                    <div className="card glass text-black">
                        <div className="card-body">
                            <div className="text-5xl">
                                <ImTicket />
                            </div>
                            <h2 className="card-title">120</h2>
                            <h2 className="card-title">Ticket Booking</h2>
                        </div>
                    </div>
                    <div className="card glass text-black">
                        <div className="card-body">
                            <div className="text-5xl">
                                <GiCargoShip />
                            </div>
                            <h2 className="card-title">100</h2>
                            <h2 className="card-title">Cruises Booking</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FlightBooking