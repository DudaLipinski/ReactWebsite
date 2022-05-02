import React, { useEffect } from 'react'
import initTestimonial from './testimonialAnimation'

import './testimonial.css'

const Testimonial = ({ cards }) => {
  useEffect(() => {
    initTestimonial(
      '#testimonial__slides-container',
      '#testimonial__btn--previous',
      '#testimonial__btn--next',
    )
  }, [])

  return (
    <div className="slider">
      <div className="slider-control">
        <button type="button" id="testimonial__btn--previous" className="cc-left">
          <span className="icon-circle-arrow-left">
            <span className="path1" />
            <span className="path2" />
          </span>
        </button>
        <button type="button" id="testimonial__btn--next" className="cc-right">
          <span className="icon-circle-arrow-right">
            <span className="path1" />
            <span className="path2" />
          </span>
        </button>
      </div>
      <div id="testimonial__slides-container" className="slides">
        {cards.map(({
					  title,
					  description,
        }) => (
          <div key={title} className="slide testimonial-card bg-orange inactive">
            <div className="fade-in">
              <h3 className="text-center font-large semi-bold">
                {title}
              </h3>
              <p className="text-center font-smaller">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/*
Testimonial.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
}
*/

export default Testimonial
