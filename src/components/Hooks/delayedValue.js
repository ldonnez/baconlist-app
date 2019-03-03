import { useEffect } from "react"

export default function useDelayedValue (callback, valueToDelay, delay) {
  const triggerChange = () => {
    callback(valueToDelay)
  }

  useEffect(() => {
    let timer = setTimeout(triggerChange, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [valueToDelay])
}
