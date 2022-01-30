// Vendor
import React from 'react'
// Internal
import { TEXT_SEARCH_PLACE_HOLDER } from '../../constants'
import './styles.css'

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export function SearchInput(props: IProps) {
  return (
    <input
      {...props}
      placeholder={TEXT_SEARCH_PLACE_HOLDER}
      className="ds-search-input"
    />
  )
}

SearchInput.defaultProps = {
  value: ''
}
