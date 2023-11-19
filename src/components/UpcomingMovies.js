
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { saveUpcomingMovies } from '../redux/movie.slice'

function UpcomingMovies() {
    const dispatch = useDispatch();

    const getUpcomingMovies = () => {
        axios.get('http://3.17.216.66:4000/upcomingMovies')
            .then((response) => {
                console.log(response.data);
                dispatch(saveUpcomingMovies(response.data))
            })
    }
    const upcomingMoviesList = useSelector((state) => state.moviesData.upcomingMovieList);

    useEffect(() => {
        getUpcomingMovies()
    }, [])

    return (
        <>
            <h1 className="text-center">Upcoming Movies</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {upcomingMoviesList.map((movie, index) => {
                    return (
                        <div key={index} className="col">
                            <div className="card h-100">
                                <img style={{ height: "400px", maxWidth: "900px" }}
                                    src={movie.imageUrl}
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{movie.name}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>

        </>
    )
}

export default UpcomingMovies;