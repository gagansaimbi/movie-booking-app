import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { saveDetails, saveUserSelections } from '../redux/movie.slice'
import { useNavigate } from 'react-router-dom'

function TicketBooking() {
    const date = new Date();

    let day = date.getDate() + 1;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;

    // console.log(props.id); 
    let id = 0
    id = useSelector((state) => state.moviesData.clickedId)
    // console.log('id:',id);
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const getMovieDetail = () => {
        if (id === 0 || id === undefined || id === null || id.length === 0) {
            navigate('/')
        }
        else {
            const uri = "http://3.17.216.66:4000/latest/" + id;
            axios.get(uri)
                .then((response) => {
                    dispatch(saveDetails(response.data))
                    // console.log(response.data);
                })
        }
    }
    const [seatCounter, setSeatCounter] = useState(0)
    const [showOne, setShowOne] = useState(false)
    const [showTwo, setShowTwo] = useState(false)
    const [showThree, setShowThree] = useState(false)
    const [saveShowTime, setSaveShowTime] = useState('')

    const detail = useSelector((state) => state.moviesData.detailsList)
    // console.log(detail);

    // const handleBooking = (id) => {
    // dispatch(saveClickId(id))
    //     navigate('/checkout')
    // }
    useEffect(() => {
        getMovieDetail()
    }, [])

    function handleCounterDown() {
        if (seatCounter > 0) {
            setSeatCounter(seatCounter - 1)
        }

    }
    function handleCounterUp() {
        if (seatCounter >= 0) {
            setSeatCounter(seatCounter + 1)
        }

    }

    function handleShowOne() {
        setShowOne(!showOne)
        setShowTwo(false)
        setShowThree(false)
        setSaveShowTime('10:00 a.m')
    }
    function handleShowTwo() {
        setShowOne(false)
        setShowTwo(!showTwo)
        setShowThree(false)
        setSaveShowTime('1:00 p.m')
    }
    function handleShowThree() {
        setShowOne(false)
        setShowTwo(false)
        setShowThree(!showThree)
        setSaveShowTime('7:00 p.m')
    }

    function handleSubmit() {
        let object = {
            name: detail[0].name,
            date: currentDate,
            time: saveShowTime,
            seats: seatCounter
        }
        dispatch(saveUserSelections(object))
        navigate('/booking-confirmation')
    }


    return (
        <>
            {/* <Header /> */}
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title text-center">Show date : {currentDate}</h5>
                        <hr />
                        <h5 className="card-title text-center">Choose Show :
                            <button className={showOne ? 'btn border btn-primary' : 'btn border '}
                                onClick={handleShowOne}>
                                10:00 a.m</button>
                            <button className={showTwo ? 'btn border btn-primary' : 'btn border '}
                                onClick={handleShowTwo}>
                                1:00 p.m</button>
                            <button className={showThree ? 'btn border btn-primary' : 'btn border'}
                                onClick={handleShowThree}>
                                7:00 p.m</button>
                        </h5>
                        <hr />
                        <h5 className="card-title text-center">Choose no. of seats</h5>
                        <div className="container text-center">
                            <div className="row align-items-start">
                                <div className="col">
                                    <button onClick={handleCounterDown} className='btn btn-secondary'>-</button>
                                </div>
                                <div className="col">
                                    <h5 className="card-title text-center">{seatCounter}</h5>
                                </div>
                                <div className="col">
                                    <button onClick={handleCounterUp} className='btn btn-secondary'>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleSubmit}
                        className="btn btn-primary"
                        disabled={saveShowTime === '' || seatCounter === 0}>
                        <h5>Book</h5>
                    </button>

                </div>


            </div>

        </>
    )
}

export default TicketBooking