// Internal
import { IMovie } from '../../types'
import { getImageUrl } from '../../utils'
import './styles.css'

interface IProps {
  onClick: (movie: IMovie) => void
  movie: IMovie
}

export function MovieCard({ movie, onClick }: IProps) {
  const { poster_path: posterUrl, id } = movie

  const handleOnClick = () => onClick(movie)

  const imageUrl = getImageUrl('w185', posterUrl)
  return (
    <button
      type="button"
      onClick={handleOnClick}
      id={`${id}`}
      className="ds-reset-button"
    >
      <img src={imageUrl} alt="img-poster" className="ds-movie-card" />
    </button>
  )
}
