// Internal
import { IMG_BASE_URL } from '../constants'

export const getImageUrl = (width: string, id: string) => {
  return `${IMG_BASE_URL}/${width}/${id}`
}

export const getImageBackground = (width: string, id: string) => {
  const url = getImageUrl(width, id)
  return {
    backgroundImage: `url("${url}")`
  }
}

export * from './queryBuilder'
