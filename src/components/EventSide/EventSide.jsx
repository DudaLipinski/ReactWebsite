import React from 'react'
import { Link } from 'react-router-dom'

import imageEvent from 'images/event.jpg'

const EventSide = () => (
  <article className="event-side">
    <img src={imageEvent} className="img-small left-rounded" alt="" />
    <h2 className="font-smaller bold">Product 2</h2>
    <p className="font-small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys.</p>
    <div className="read-more">
      <Link to className="flex flex-start align-center font-small font-green semi-bold">
        Read more
        <span className="icon-arrow-right" aria-hidden="true" />
      </Link>
    </div>
  </article>
)

export default EventSide
