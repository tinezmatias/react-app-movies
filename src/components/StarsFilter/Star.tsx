// Internal
import './styles.css'

interface IProps {
  current: number
  id: number
  onClick: (id: number) => void
}

export function Star({ current, id, onClick }: IProps) {
  const checked = current >= id
  const className = `ds-rating-label ${
    checked ? 'ds-rating-checked' : 'ds-rating-not-checked'
  }`
  const onChange = () => onClick(id)

  return (
    <>
      <input
        type="checkbox"
        name="rating"
        className="ds-rating-input"
        id={`rating-${id}`}
        data-testid={`rating-${id}`}
        checked={checked}
        value={id}
        onChange={onChange}
      />
      <label htmlFor={`rating-${id}`} className={className} />
    </>
  )
}
