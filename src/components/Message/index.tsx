// Internal
import { SubTitle } from '..'
import './styles.css'

interface IProps {
  text: string
  color?: string
  style?: Record<string, string>
}

export function Message({ style, ...props }: IProps) {
  return (
    <div style={style} className="ds-message">
      <SubTitle {...props} />
    </div>
  )
}

Message.defaultProps = {
  color: '#b5b5b5',
  style: {}
}
