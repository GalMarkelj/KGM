import { useState, useCallback } from 'react'

export const useRefElement = () => {
  const [element, setElement] = useState(null)

  const ref = useCallback(node => {
    if (node !== null) {
      setElement(node)
    }
  }, [])

  return [element, ref]
}

export default { useRefElement }
