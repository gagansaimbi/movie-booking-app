
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Events from './components/Events';
import MovieDetails from './components/MovieDetails';
import BookingComplete from './components/BookingComplete';
import LatestMovies from './components/LatestMovies';
import TicketBooking from './components/TicketBooking';
import UpcomingMovies from './components/UpcomingMovies';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element=<Home /> />
        <Route path='/events' element=<Events /> />
        <Route path='/movie-details' element=<MovieDetails /> />
        <Route path='/booking-confirmation' element=<BookingComplete /> />
        <Route path='/checkout' element=<TicketBooking /> />
        <Route path='/latest-movies' element=<LatestMovies /> />
        <Route path='/upcoming-movies' element=<UpcomingMovies /> />
        <Route path='/*'  element=<Home /> />
      </Routes>
      
    </>
  );
}

export default App;
