// internal
import './styles.css'

const skeletons = {
  MovieDetails: 'ds-movie-details-loader',
  Moviecard: 'ds-movie-card-loader'
}

interface IProps {
  type: typeof skeletons[keyof typeof skeletons]
}

function Skeleton({ type }: IProps) {
  const className = `ds-base-skeleton ${type}`
  return <div className={className} data-testid="skeleton" />
}

export function MovieDetailsLoader() {
  return <Skeleton type={skeletons.MovieDetails} />
}

export function MovieCardLoader() {
  return <Skeleton type={skeletons.Moviecard} />
}
