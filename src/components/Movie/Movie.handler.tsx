import { useState } from 'react'

// Hooks
const Handler = () => {
  const [isHover, setIsHover] = useState<boolean>(false)

  const handleEnter = () => {
    setIsHover(true)
  }

  const handleLeave = () => {
    setIsHover(false)
  }

  return { isHover, handleEnter, handleLeave }
}

export default Handler
