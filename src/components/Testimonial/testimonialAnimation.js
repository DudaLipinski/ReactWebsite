const initTestimonial = (
  slidesContainerSelector,
  previousButtonSelector,
  nextButtonSelector,
) => {
  console.log('--- slidesContainerSelector ---') // [XXX] REMOVE BEFORE COMMITING
  console.log(slidesContainerSelector) // [XXX] REMOVE BEFORE COMMITING
  let slideIndex = 0
  console.log('--- previousButtonSelector ---') // [XXX] REMOVE BEFORE COMMITING
  console.log(previousButtonSelector) // [XXX] REMOVE BEFORE COMMITING
  console.log('--- nextButtonSelector ---') // [XXX] REMOVE BEFORE COMMITING
  console.log(nextButtonSelector) // [XXX] REMOVE BEFORE COMMITING

  const slidesContainer = document.querySelector(slidesContainerSelector)
  const slides = slidesContainer.children
  const { firstElementChild } = slidesContainer

  firstElementChild.classList.remove('inactive')
  firstElementChild.classList.add('active')

  function navigate(addition) {
    slideIndex += addition

    if (slideIndex === slides.length) {
      slideIndex = 0
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1
    }

    for (let i = 0; i < slides.length; i += 1) {
      slides[i].classList.replace('active', 'inactive')
    }
    slides[slideIndex].classList.replace('inactive', 'active')
  }

  const previousButton = document.querySelector(previousButtonSelector)
  const nextButton = document.querySelector(nextButtonSelector)

  previousButton.onclick = () => navigate(-1)
  nextButton.onclick = () => navigate(1)
}

export default initTestimonial
