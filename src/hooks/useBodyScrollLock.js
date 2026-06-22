import { useEffect } from 'react'

const MOBILE_NAV_ID = 'mobile-nav-panel'

/**
 * Locks page scroll while `locked` is true. Uses position:fixed on body for iOS,
 * plus touch/wheel prevention for background content. Scroll inside `MOBILE_NAV_ID`
 * is still allowed when the menu panel overflows.
 */
export default function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return

    const scrollY = window.scrollY
    const body = document.body
    const html = document.documentElement

    const previousBody = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      touchAction: body.style.touchAction,
    }
    const previousHtmlOverflow = html.style.overflow

    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    body.style.touchAction = 'none'
    html.style.overflow = 'hidden'

    const isInsideMobileNav = (target) => {
      const panel = document.getElementById(MOBILE_NAV_ID)
      return panel && panel.contains(target)
    }

    const preventBackgroundScroll = (event) => {
      if (isInsideMobileNav(event.target)) return
      event.preventDefault()
    }

    document.addEventListener('touchmove', preventBackgroundScroll, { passive: false })
    document.addEventListener('wheel', preventBackgroundScroll, { passive: false })

    return () => {
      body.style.overflow = previousBody.overflow
      body.style.position = previousBody.position
      body.style.top = previousBody.top
      body.style.left = previousBody.left
      body.style.right = previousBody.right
      body.style.width = previousBody.width
      body.style.touchAction = previousBody.touchAction
      html.style.overflow = previousHtmlOverflow
      window.scrollTo(0, scrollY)

      document.removeEventListener('touchmove', preventBackgroundScroll)
      document.removeEventListener('wheel', preventBackgroundScroll)
    }
  }, [locked])
}
