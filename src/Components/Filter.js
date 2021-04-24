import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { moviesData } from './MoviesData';
import MovieCard from './MovieCard'


const Filter = ({titleSearch, setTitleSearch, rateSearch, setRateSearch}) => {
    
    return (
        <div className="filter">
            <div className="search">
                <input
                    className="searchTitle"
                    type="text"  
                    placeholder="Search"
                    value={titleSearch}
                    onChange={(e) => setTitleSearch(e.target.value)}
                   />
            </div>
            <div className="searchRate">
                <StarRatingComponent starCount={5} value={rateSearch} onStarClick={setRateSearch} emptyStarColor={"#fff"}/>
            </div>

        </div> 
    )
}

export default Filter;
