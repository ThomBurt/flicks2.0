import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Redirect } from 'react-router-dom';
import { Spinner } from '../../components/Yelp/Spinner/Spinner';
import './SelectMovie.css';
//import { Streaming } from '../../components/Streaming/Streaming';
import axios from 'axios';
import { FiRefreshCw } from "react-icons/fi";
import { RiArrowGoBackFill } from "react-icons/ri";

const SelectMovie = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [formState, setFormState] = useState({ date: '', genre: '' });

  const [movieState, setMovieState] = useState({});

  const [streamingState, setStreamingState] = useState({});

  if (!Auth.loggedIn()) {
   return <Redirect to="/login" />
 }

  var random;
  var max = 99
  function findRandom() {
    random = Math.floor(Math.random() * max)
    console.log(random)
  };

  const getMovie = async(props) => {
    setIsLoading(true);
    const inputDate = formState.date;
    const inputGenre = formState.genre;

    if(!formState) {
      return false;
    }

    try {

      const response = await fetch(`https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_IMDB_APIKEY}/?title_type=feature&release_date=${inputDate}&genres=${inputGenre}&countries=us&languages=en&count=100`);

      const jsonData = await response.json();
      const selectedMovie = jsonData.results[random]


      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      
      const movieData = {
        movieId: selectedMovie.id,
        title: selectedMovie.title,
        year: selectedMovie.description,
        image: selectedMovie.image,
        plot: selectedMovie.plot
      };
      console.log(movieData);
      setMovieState(movieData);
      console.log(movieState);

      setIsLoading(false) 

      localStorage.setItem('movieInfo', JSON.stringify(movieData.title));

         
    } catch (err) {
      console.error(err);
    }
  };

  const getStreamingServices = async () => {

    const movieTitle = movieState.title;

    const optionsParams = {
      method: 'GET',
      url: 'https://mdblist.p.rapidapi.com/',
      params: [],
      headers: {
        'X-RapidAPI-Host': 'mdblist.p.rapidapi.com',
        'X-RapidAPI-Key': '384177d302msh9d8e58d9f31ffccp1bfa57jsnf3cea9fef042',
      },
    };
    axios
      .request({
          ...optionsParams,
          params: { s: `${movieTitle}` }
        })
      .then(function (response) {
        console.log(response.data);
        const traktid = response.data.search[0].traktid;
        const traktidOptions = {
            ...optionsParams,
            params: { t: `${traktid}` }
        };
        axios.request(traktidOptions).then(function (response) {

          // if (!response.ok) {
          //   return false;
          // }

          const streamingServices = response.data.streams;
          setStreamingState(streamingServices);
          //console.log(streamingState);
          console.log(response.data.streams)

          let temporaryArray = [];

          for (let i = 0; i < response.data.streams.length; i++){

            temporaryArray.push(response.data.streams[i].name)

          //  const streamingEl = document.getElementById('streaming');
          //  const streamingElInput = document.createElement("p");
          //  streamingElInput.innerHTML(response.data.streams[i].name); 
          //  console.log(response.data.streams[i].name)
          //  streamingEl.append(streamingElInput);
         }
         setStreamingState({
           other: temporaryArray
         })
         console.log(temporaryArray);
          for (let i = 0; i < temporaryArray.length; i++) {

          }
          // const streamingServices = response.data.streams;
          // setStreamingState(streamingServices);
          // const streamingEl = document.getElementById('streaming');
          console.log(streamingState);
        })
      })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    findRandom();

    getMovie();

    getStreamingServices();

    // hideDiv();
  };

  // const hideDiv = () => {
  //   const movieChoiceDiv = document.getElementById('selectMovieDiv');
  //   movieChoiceDiv.classList.add('display-none');
  // }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  const onRefresh = async (e) => {
    e.preventDefault();
    findRandom();
    getMovie();
    getStreamingServices();
  }

  const onGoBack = async(e) => {
    e.preventDefault();
    window.location.href='/movie';
  }

  return (

    <main className='main-body'>
        {isLoading ? <Spinner /> : getMovie}
        {!movieState.title
        ?
      <div style={{display: !isLoading ? "display" : "none"}} className="div-body-under-main" id="selectMovieDiv">
        <h2 className="">Select your movie!</h2>
        <div className="">
        <form onSubmit={handleFormSubmit}>
          <div className="dropdown-div">
            <label className="form-title" htmlFor="genre">Genre:</label>
            <select
              className="genre-dropbox"
              name="genre"
              id="genre"
              onChange={handleChange}
            >
              <option value="">Please select a genre</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="animation">Animation</option>
              <option value="biography">Biography</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="drama">Drama</option>
              <option value="family">Family</option>
              <option value="fantasy">Fantasy</option>
              <option value="film_noir">Film-Noir</option>
              <option value="history">History</option>
              <option value="horror">Horror</option>
              <option value="music">Music</option>
              <option value="musical">Musical</option>
              <option value="mystery">Mystery</option>
              <option value="news">News</option>
              <option value="romance">Romance</option>
              <option value="sci_fi">Sci-Fi</option>
              <option value="sport">Sport</option>
              <option value="thriller">Thriller</option>
              <option value="war">War</option>
              <option value="western">Western</option>

            </select>
          </div>
          <div className="year-range-div">
            <label className="year-text" htmlFor="date">Year Range:</label>
            <select
              className="genre-dropbox"
              name="date"
              id="date"
              onChange={handleChange}
            >
              <option value="">Please select a year range</option>
              <option value="2010-01-01,">2010 - Today</option>
              <option value="1990-01-01,2010-01-01">1990 - 2010</option>
              <option value="1970-01-01,1990-01-01">1970 - 1990</option>
              <option value="1950-01-01,1970-01-01">1950 - 1970</option>
              <option value="1930-01-01,1950-01-01">1930 - 1950</option>
            </select>
          </div>
          <div className="submit-button-div">
            <button disabled={isLoading} className='submit-button' type="submit">Submit</button>
          </div>
        </form>
        </div>
      </div>

      : <div className='main-results-div'>
        {/* {isLoading ? <Spinner /> : getMovie} */}
        <div className='refresh-div'>
          <button className='refresh-button-movie' onClick={onGoBack}><RiArrowGoBackFill /></button>
          <button className='refresh-button-movie' onClick={onRefresh}><FiRefreshCw /></button>
        </div>
        <h1>TONIGHT YOU'RE WATCHING</h1>
        <div className="movie-card">
          <h3 className="movie-card-header">{movieState.title} {movieState.year}</h3>
          <div className="movie-card-body">
            <img className="movie-img" src={movieState.image} alt="movie"/>
            <p>{movieState.plot}</p>
          </div>
          <div className='streaming' id="streaming">
            <p>{streamingState.name}</p>
          </div>
        </div>
        <div className='button-to-dinner'>
          <a href='/dinner' className='submit-button-dinner'>
            Now pick dinner!
          </a>
        </div>
      </div>
      }

    </main>
  );
}
export default SelectMovie;