export function scrollToCars() {
  unlockScroll()
  document.getElementById('explore-cars')?.scrollIntoView({ behavior: 'smooth' })
}

export function lockScroll() {
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
}

export function unlockScroll() {
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
}
