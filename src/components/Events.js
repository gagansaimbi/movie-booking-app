
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { saveEvents } from '../redux/movie.slice'

function Events() {
    const dispatch = useDispatch();

    const eventsList = useSelector((state) => state.moviesData.eventsList);

    const getEvents = () => {
        axios.get('http://3.17.216.66:4000/events')
            .then((response) => {
                dispatch(saveEvents(response.data))
            })
    }

    useEffect(() => {
        getEvents()
    }, [])


    return (
        <>
            <br />
            <h1 className='text-center'>Events</h1>
            <hr />

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {eventsList.map((event, index) => {
                    return (
                        <div key={index} className="col">
                            <div className="card h-100">
                                <img style={{ maxHeight: "400px", maxWidth: "700px" }} src={event.imageUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{event.name}</h5>
                                </div>
                            </div>
                        </div>)

                })}

            </div>

        </>
    )
}

export default Events