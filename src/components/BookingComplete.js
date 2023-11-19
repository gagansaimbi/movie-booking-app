import QRCode from "react-qr-code";
import {  useSelector } from "react-redux"
import {  useNavigate } from 'react-router-dom'

function BookingComplete() {
    const navigate = useNavigate()
    
    const bookingDetail = useSelector((state) => state.moviesData.userSelectionInfo)
    console.log(bookingDetail)
    if(bookingDetail.name===''){
        navigate('/')
    }

    let qrInputString = `${bookingDetail.seats} tickets booked for movie ${bookingDetail.name} for the show at 
    ${bookingDetail.time} on ${bookingDetail.date}`
    let qrvalue = qrInputString

    return (
        <>
        <h1 className='text-center'>Booking Confirmation Page</h1>
        <hr />

        <h4 className='text-center'>Your booking has been confirmed. Please find the booking details below</h4>

            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="row ">

                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card ">

                            <div className=" card text-bg-light" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <QRCode value={qrvalue} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">

                        <div className="card " style={{ width: "18rem" }}>

                            <div className="card-body">
                                <h5 className="card-title text-center">Ticket Details</h5>
                                <hr />
                                <p className="card-text">Show Date : {bookingDetail.date}</p>
                                <p className="card-text">Movie Name : {bookingDetail.name}</p>
                                <p className="card-text">Show Timings : {bookingDetail.time}</p>
                                <p className="card-text">Number of seats : {bookingDetail.seats}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <h1 className='position-absolute top-100 start-50 translate-middle text-center'>ENJOY THE SHOW!</h1>


        </>
    )
}

export default BookingComplete