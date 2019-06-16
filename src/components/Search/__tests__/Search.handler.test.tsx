import { renderHook, act } from 'react-hooks-testing-library'

import searchHandler from '.././Search.handler'

describe('Search', () => {
  test('should update showRes and val when hideRes is called', () => {
    const { result } = renderHook(() => searchHandler())

    act(() => result.current.hideRes())
    expect(result.current.val).toBe('')
    expect(result.current.showRes).toBe(false)
  })
})
