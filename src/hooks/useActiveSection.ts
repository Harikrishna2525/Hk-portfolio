import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: readonly string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    let frame = 0

    const update = () => {
      const marker = window.scrollY + Math.min(window.innerHeight * 0.28, 180)
      let current = sectionIds[0] ?? ''

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element && element.offsetTop <= marker) {
          current = id
        }
      }

      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8
      if (nearBottom) {
        current = sectionIds[sectionIds.length - 1] ?? current
      }

      setActive(current)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionIds])

  return active
}
