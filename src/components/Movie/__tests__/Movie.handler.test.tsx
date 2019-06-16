import { renderHook, act } from 'react-hooks-testing-library'

import movieHandler from '.././Movie.handler'

describe('Movie', () => {
  test('should update isHover value to true when handleEnter is called', () => {
    const { result } = renderHook(() => movieHandler())

    act(() => result.current.handleEnter())
    expect(result.current.isHover).toBe(true)
  })

  test('should update isHover value to false when handleLeave is called', () => {
    const { result } = renderHook(() => movieHandler())

    act(() => result.current.handleLeave())
    expect(result.current.isHover).toBe(false)
  })
})
