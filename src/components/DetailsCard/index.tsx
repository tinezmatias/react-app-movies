// Vendor
import { IMovie } from '../../types'
import { getImageBackground, getImageUrl } from '../../utils'
// Styles
import './styles.css'

interface IProps {
  movie: IMovie
}

export function DetailsCard({ movie }: IProps) {
  const bgImage = getImageBackground('w1280', movie.backdrop_path)
  const posterImage = getImageUrl('w185', movie.poster_path)
  const styles = { ...(movie.backdrop_path && bgImage) }

  return (
    <div className="ds-container-card">
      <div className="ds-movie-info">
        <div className="ds-movie-header">
          <div className="ds-movie-header-left">
            <img
              className="ds-movie-header-poster"
              src={posterImage}
              alt="poster"
            />
            <span className="ds-movie-header-average">
              {movie.vote_average} / 10
            </span>
          </div>
          <div className="ds-movie-header-right">
            <h1>{movie.title}</h1>
            <h4>{movie.release_date}</h4>
          </div>
        </div>
        <div className="ds-movie-overview">
          <p>{movie.overview}</p>
        </div>
      </div>
      <div className="ds-container-card-bg" style={styles} />
    </div>
  )
}
