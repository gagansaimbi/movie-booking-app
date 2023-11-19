import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { saveClickId, saveEvents, saveLatestMovies, saveUpcomingMovies } from '../redux/movie.slice'

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const getLatestMovies = () => {
        axios.get('http://3.17.216.66:4000/latest')
            .then((response) => {
                // console.log(response.data);
                dispatch(saveLatestMovies(response.data))

            })
    }
    const latestMoviesList = useSelector((state) => state.moviesData.latestMovieList);

    const getUpcomingMovies = () => {
        axios.get('http://3.17.216.66:4000/upcomingMovies')
            .then((response) => {
                // console.log(response.data);
                dispatch(saveUpcomingMovies(response.data))
            })
    }

    const getEvents = () => {
        axios.get('http://3.17.216.66:4000/events')
            .then((response) => {
                // console.log(response.data);
                dispatch(saveEvents(response.data))
            })
    }

    useEffect(() => {
        getLatestMovies()
        getUpcomingMovies()
        getEvents()
    }, [])

    const handleBooking = (id) => {
        dispatch(saveClickId(id))
        navigate('/movie-details')
    }
    const [activeIndex, setActiveIndex] = useState(0);

  const handleSlide = (index) => {
    setActiveIndex(index);
  };

    return (
        <>
            {/* <Header /> */}
            {/* Top banner */}
            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <Link to='/latest-movies' className="link-no-underline">
                            <h3 className="card-title text-center">Latest Movies</h3>
                        </Link>

                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                        <Link to='/upcoming-movies' className="link-no-underline">
                            <h3 className="card-title">Upcoming Movies</h3>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                        <Link to="/events" className="link-no-underline">
                            <h3 className="card-title">Nearbuy Events</h3>
                        </Link>

                    </div>
                </div>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        {latestMoviesList && latestMoviesList.length > 0 &&
          latestMoviesList.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSlide(index)}
              className={index === activeIndex ? 'active' : ''}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
      </div>
      <div className="carousel-inner">
        {latestMoviesList && latestMoviesList.length > 0 &&
          latestMoviesList.map((movie, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''} text-center`}
            >
              <img
                style={{ maxHeight: "400px", maxWidth: "1600px" }}
                src={movie.imageUrl}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={() => handleSlide((activeIndex - 1 + latestMoviesList.length) % latestMoviesList.length)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={() => handleSlide((activeIndex + 1) % latestMoviesList.length)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

            <br />
            {/* Recommended movies */}
            <h1 className="text-center">Recommended Movies</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4" >
                {latestMoviesList.map((movie, index) => {
                    return (
                        <div key={index} className="col">
                            <div className="card">
                                <img src={movie.imageUrl}
                                    style={{ maxHeight: "250px" }}
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{movie.name}</h5>
                                </div>
                                <button onClick={() => handleBooking(movie._id)}
                                    className="btn btn-primary">
                                    <h4>Book</h4>
                                </button>
                            </div>
                        </div>
                    )
                })}

            </div>

        </>
    )
}

export default Home