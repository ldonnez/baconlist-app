import { useEffect, useCallback } from "react"

export default function useDelayedValue (callback, valueToDelay, delay) {
  const triggerChange = useCallback(() => {
    callback(valueToDelay)
  }, [valueToDelay, callback])

  useEffect(() => {
    let timer = setTimeout(triggerChange, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [delay, valueToDelay, triggerChange])
}
