import { useEffect, useState } from "react"

export const useViewPort = () => {
  const [width, setWidth] = useState<number>()

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    //adds event listener when component mounts
    window.addEventListener('resize', handleWindowResize)
    return () => {
      //removes event listener when component unmounts
      window.removeEventListener('resize', handleWindowResize)
    };
  }, [])

  return { width }

}