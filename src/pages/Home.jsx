import React, { useState } from 'react'
import MovieCard from '../components/MovieCard'
import '../css/Home.css'

function Home() {
    const [searchQuery, setSearchQuery] = useState('')

    const movies = [
        {id:1, title:"John Wick", release_date:"2002"},
        {id:1, title:"Harry Potter", release_date:"2010"},
        {id:1, title:"Lord of the Rings", release_date:"2000"},
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery('')
        
    }



  return (
    <div className='home'>
        <form onSubmit={handleSearch} className='search-form'>
            <input 
            type="text" 
            placeholder='Search' 
            className='search-input' 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
            <button type='submit' className='search-button'>Search</button>
        </form>

      <div className='movie-grid'>
        {movies.map(
            (movie) => (
            <MovieCard movie={movie} key={movie.id}/>
            
            ))}
      </div>
    </div>
  );
}

export default Home
