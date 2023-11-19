
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { saveLatestMovies } from '../redux/movie.slice'
// import Header from './Header';


function LatestMovies() {
    const dispatch = useDispatch();

    const getLatestMovies = () => {
        axios.get('http://3.17.216.66:4000/latest')
            .then((response) => {
                dispatch(saveLatestMovies(response.data))

            })
    }
    const latestMoviesList = useSelector((state) => state.moviesData.latestMovieList);


    useEffect(() => {
        getLatestMovies()
    }, [])

    return (
        <>
            {/* <Header /> */}
            <h1 className="text-center">Latest Movies</h1>
            <hr />

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {latestMoviesList.map((movie, index) => {
                    return <>
                        <div key={index} className="col">
                            <div className="card h-100">
                                <img style={{maxHeight:"300px", maxWidth:"700px"}} src={movie.imageUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{movie.name}</h5>
                                </div>
                            </div>
                        </div>
                    </>
                })}

            </div>

        </>
    )
}

export default LatestMovies;