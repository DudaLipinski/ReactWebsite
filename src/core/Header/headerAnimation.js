const baseHeight = 94
const minimumHeight = 50
const heightDifference = baseHeight - minimumHeight

const scrollThreshold = 150

const setHeaderClass = () => {
  const { scrollTop } = document.documentElement
  const headerImage = document.querySelector('#header-logo')

  const heightToDecrease = (
    Math.min(1, scrollTop / scrollThreshold)
  ) * heightDifference
  const currentHeight = baseHeight - heightToDecrease

  const header = document.querySelector('header')
  header.style.height = `${currentHeight}px`

  const isDocumentScrolled = scrollTop > 0
  if (isDocumentScrolled) {
    header.classList.add('scrolled')
    headerImage.classList.add('scrolled-logo')
  } else {
    header.classList.remove('scrolled')
    headerImage.classList.remove('scrolled-logo')
  }
}

const initHeaderAnimation = () => {
  const header = document.querySelector(header)

  let executionTimeout
  document.addEventListener('scroll', (event) => {
    setHeaderClass()
    if (executionTimeout) {
      clearTimeout(executionTimeout)
    }

    executionTimeout = setTimeout(setHeaderClass, 30)
  })
}

export default initHeaderAnimation;
