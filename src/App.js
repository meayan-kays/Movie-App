import React, {useState, useEffect} from 'react'
import './App.css'
import {moviesData} from './Components/MoviesData'
import MovieList from './Components/MovieList'
import MovieAdding from './Components/MovieAdding'
import Filter from './Components/Filter';


function App() {
  const [moviesList, setMoviesList] = useState(moviesData)
  const [titleSearch, setTitleSearch] = useState('')
  const [rateSearch, setRateSearch] = useState(0)

  let addMovie = (newMovie ,) => {
    setMoviesList([...moviesList, newMovie])
  }

  useEffect(() =>{
    document.title = "Movie Store"
  })


  return (
    <div className="App">
      <div className="header">
        <h3>Movie Store</h3>
        <Filter titleSearch={titleSearch} setTitleSearch={setTitleSearch} rateSearch={rateSearch} setRateSearch={setRateSearch}/>
      </div>
       <MovieList movies = {moviesList} titleSearch={titleSearch} rateSearch={rateSearch}/>
       <MovieAdding addMovie={addMovie} />
    </div>
  );
}

export default App;
