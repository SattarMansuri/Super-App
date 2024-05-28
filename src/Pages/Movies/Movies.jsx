import React, { useEffect, useState } from 'react'
import styles from './Movies.module.css'
import Profile from '../../assets/Images/Profile.png'
import { useNavigate } from 'react-router-dom'
import { MoviesApi } from '../../apis/MoviesApi'

const Movies = () => {
  const navigate = useNavigate()
  const navigateToHome = () =>{
    navigate('/registered')
  }

  const [movies, setMovies] = useState([])
  const genre = localStorage.getItem('genre')
  
  const MoviesList = async ()=>{
  const response = await MoviesApi()
  const filtered = response.slice(0, 8)
  setMovies(filtered)
  }
  useEffect(()=>{
    MoviesList()
  }, [ ])
  return (
  <>
  <div className={styles.movies}>
    <div className={styles.head}>
      <span>Super App</span>
      <img onClick={navigateToHome} src={Profile} alt="User Image" />
    </div>
    <div className={styles.text}>Entertainment according to your choice</div>
    <div className={styles.allmovies}>
    <div className={styles.genre}>{genre}</div>
    <div style={{marginLeft: "5vw"}}>
    {movies.map((res)=>(
      <img className={styles.poster} src={res?.Poster} alt={res.Title} key={res.imdbID} />
    ))}
    </div>
    </div>
  </div> 
  </>
  )
}

export default Movies