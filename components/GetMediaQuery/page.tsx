'use client'
import { useEffect, useState } from 'react'

function CustomMediaQuery() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(min-width: 960px)')
    const minmediaTablet = window.matchMedia('(min-width: 426px)')
    const mediaTablet = window.matchMedia('(max-width: 960px)')
    const listener = () => {
      if (media.matches) {
        setIsDesktop(media.matches)
      } else if (minmediaTablet.matches && mediaTablet.matches) {
        setIsTablet(true)
      }
    }
    listener()
    window.addEventListener('resize', listener)

    return () => window.removeEventListener('resize', listener)
  }, [isDesktop, isTablet])

  return [isDesktop, isTablet]
}

export default CustomMediaQuery
