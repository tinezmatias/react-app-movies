// Styles
import './styles.css'

interface IProps {
  text: string
  color?: string
}

export function SubTitle({ text, color }: IProps) {
  const styles = {
    color
  }

  return (
    <h2 style={styles} className="ds-subtitle">
      {text}
    </h2>
  )
}

SubTitle.defaultProps = {
  color: '#b5b5b5'
}
