// Vendor
import { render } from '@testing-library/react'
// Internal
import { DetailsCard } from './index'
// Mocks
import { MOVIE } from './__mocks__/data'

const setup = (movie = MOVIE) => render(<DetailsCard movie={movie} />)

describe('details card', () => {
  it('Should render', () => {
    const screen = setup()
    const { title, release_date: date, overview } = MOVIE

    const titleComponet = screen.getByText(title)
    const dateComponet = screen.getByText(date)
    const overviewComponet = screen.getByText(overview)

    expect(titleComponet).toBeInTheDocument()
    expect(dateComponet).toBeInTheDocument()
    expect(overviewComponet).toBeInTheDocument()
  })
})
