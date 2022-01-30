// Vendor
import React from 'react'
import { useNavigate } from 'react-router-dom'
// Internal
import { MovieCard, MovieCardLoader } from '..'
import { useDispatchMovie } from '../../hooks'
import { IMovie } from '../../types'
import './styles.css'

interface IProps {
  movies?: Array<IMovie>
  isLoading?: boolean
}

export function MoviesList({ movies, isLoading }: IProps) {
  const navigate = useNavigate()
  const dispatchMovie = useDispatchMovie()

  const onClick = (movie: IMovie) => {
    dispatchMovie(movie)
    navigate(`/movie/${movie.id}`)
  }

  const showLoading = isLoading
  const showList = !isLoading && movies

  const placeHolderArray = Array.from(Array(20).keys())

  return (
    <div className="ds-movies-list">
      {showLoading &&
        React.Children.toArray(placeHolderArray.map(() => <MovieCardLoader />))}
      {showList &&
        React.Children.toArray(
          movies.map((movie: IMovie) => (
            <MovieCard movie={movie} onClick={onClick} />
          ))
        )}
    </div>
  )
}

MoviesList.defaultProps = {
  isLoading: false,
  movies: []
}
