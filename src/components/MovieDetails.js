import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveDetails, saveClickId } from '../redux/movie.slice';
import { useNavigate } from 'react-router-dom';

function MovieDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickedId = useSelector((state) => state.moviesData.clickedId);
  const detail = useSelector((state) => state.moviesData.detailsList);

  const getMovieDetail = () => {
    if (!clickedId) {
      navigate('/');
    } else {
      const uri = `http://3.17.216.66:4000/latest/${clickedId}`;
      axios.get(uri).then((response) => {
        dispatch(saveDetails(response.data));
      });
    }
  };

  const handleBooking = (id) => {
    dispatch(saveClickId(id));
    navigate('/checkout');
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <>
      {detail.length !== 0 && (
        <div className="container mt-5">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={detail[0].imageUrl} className="img-fluid rounded-start" alt="Movie Poster" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">Movie Details</h2>
                  <hr />
                  <div className="row">
                    <div className="col">
                      <p className="fs-5"><strong>Movie Name:</strong> {detail[0].name}</p>
                      <p className="fs-5"><strong>Release date:</strong> 13-June-2023</p>
                    </div>
                    <div className="col">
                      <p className="fs-5"><strong>Duration:</strong> 1.47h</p>
                      <p className="fs-5"><strong>Ratings:</strong> {detail[0].rate}</p>
                    </div>
                  </div>
                  <button onClick={() => handleBooking(detail[0]._id)} className="btn btn-primary">
                    <h5>Book Now</h5>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
