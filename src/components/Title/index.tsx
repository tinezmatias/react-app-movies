// Styles
import './styles.css'

interface IProps {
  text: string
}

export function Title({ text }: IProps) {
  return <h1 className="ds-title">{text}</h1>
}
