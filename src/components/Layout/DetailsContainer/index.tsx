// Vendor
import { ReactNode } from 'react'
// Internal
import { getImageBackground } from '../../../utils'
import { BackButton } from '../../BackButton'
// Styles
import './styles.css'

interface IProps {
  children: ReactNode
  image?: string
  darkBg: boolean
}

export function DetailsContainer({ image, children, darkBg }: IProps) {
  const bgImage = getImageBackground('w300', image || '')
  const styles = {
    ...(image && bgImage),
    backgroundColor: darkBg ? '#43423e' : '#fff'
  }

  return (
    <div className="ds-details-container">
      <BackButton />
      {children}
      <div className="ds-details-container-bg" style={styles} />
    </div>
  )
}

DetailsContainer.defaultProps = {
  image: ''
}
