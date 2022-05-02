const parsePixelsString = (pixelsString) => parseInt(pixelsString.slice(1, -2) || 0)

const initCarousel = (listSelector, previousButtonSelector, nextButtonSelector) => {
  const listEl = document.querySelector(listSelector)
  const btnLeftEl = document.querySelector(previousButtonSelector)
  const btnRightEl = document.querySelector(nextButtonSelector)

  let itemIndex = 0

  const lastItem = listEl.children[listEl.children.length - 1]

  const getNextLeftValue = () => {
    const elementToBeSeen = listEl.children[itemIndex]
    return elementToBeSeen.offsetLeft
  }

  const setButtonsVisibility = (previousLeft, nextLeft) => {
    if (itemIndex === 0) {
      btnLeftEl.classList.add('disabled')
    } else {
      btnLeftEl.classList.remove('disabled')
    }

    const futureMovement = nextLeft - previousLeft

    const rect = lastItem.getBoundingClientRect()
    if ((rect.left - futureMovement) + rect.width > window.innerWidth) {
      btnRightEl.classList.remove('disabled')
    } else {
      btnRightEl.classList.add('disabled')
    }
  }

  btnLeftEl.addEventListener('click', () => {
    if (itemIndex === 0) {
      return
    }

    itemIndex -= 1

    const nextLeftValue = getNextLeftValue() - 40
    const lastLeftValue = parsePixelsString(listEl.style.left)
    listEl.style.left = `-${nextLeftValue}px`

    setButtonsVisibility(lastLeftValue, nextLeftValue)
  })

  btnRightEl.addEventListener('click', () => {
    itemIndex += 1

    const nextLeftValue = getNextLeftValue() - 40
    const lastLeftValue = parsePixelsString(listEl.style.left)
    listEl.style.left = `-${nextLeftValue}px`

    setButtonsVisibility(lastLeftValue, nextLeftValue)
  })

  btnRightEl.style.display = 'block'
  btnLeftEl.style.display = 'block'
  setButtonsVisibility(0, 0)
}

export default initCarousel
