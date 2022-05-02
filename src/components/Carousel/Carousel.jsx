import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import initCarouselAnimation from './carouselAnimation'

import './carousel.css'

const Carousel = ({ cards }) => {
  useEffect(() => {
    initCarouselAnimation(
      '.products-grid',
      '#left-btn',
      '#right-btn',
    )
  }, [])

  return (
    <>
      <div className="carousel-btn-hldr carousel-btn-hldr-left">
        <button type="button" id="left-btn" className="carousel-btn" style={{ display: 'none' }}>
          <span className="icon-circle-arrow-left">
            <span className="path1" />
            <span className="path2" />
          </span>
        </button>
      </div>
      <div className="products-grid" style={{ left: '0px' }}>
        {cards.map(({
          caption,
          title,
          shortDescription,
          followUpUrl,
        }) => (
          <article className="item-container shadow">
            <div className="card">
              <div>
                <span className="margin-small uppercase font-tiny font-red semi-bold">
                  {caption}
                </span>
                <h3 className="margin-small font-medium semi-bold">
                  {title}
                </h3>
                <p className="font-smaller">
                  {shortDescription}
                </p>
              </div>
              <div className="read-more">
                <Link to={followUpUrl} className="flex flex-start align-center font-small font-green semi-bold">
                  Read more
                  <span className="icon-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="carousel-btn-hldr carousel-btn-hldr-right">
        <button type="button" id="right-btn" className="carousel-btn" style={{ display: 'block' }}>
          <span className="icon-circle-arrow-right">
            <span className="path1" />
            <span className="path2" />
          </span>
        </button>
      </div>
    </>
  )
}

export default Carousel
