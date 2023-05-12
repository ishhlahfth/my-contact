import { render, screen, cleanup } from '@testing-library/react'
import Icon from '../Icon'

test('Should render icon component', () => {
  render(<Icon />)
  const iconElement = screen.getByTestId('icon')
  expect(iconElement).toBeInTheDocument()
})