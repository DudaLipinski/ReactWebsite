import React from 'react'

import imageEvent from 'images/event.jpg'
import { Link } from 'react-router-dom'

const EventList = ({ cards }) => (

  <div className="flex flex-wrap">
    {cards.map(({
      title,
      date,
      local,
      shortDescription,
    }) => (
      <article className="item-wrap">
        <img
          className="left-rounded img-medium"
          src={imageEvent}
          alt=""
        />
        <div className="">
          <h3 className="margin-small font-large semi-bold">
            {title}
          </h3>
          <div className="date font-tiny">
            <p>
              Date:
              {' '}
              {date}
            </p>
            <p>
              Place:
              {' '}
              {local}
            </p>
          </div>
          <p className="font-small short-description margin-small">
            {shortDescription}
          </p>
          <div className="read-more">
            <Link
              to="event"
              className="flex flex-start align-center font-small font-green semi-bold"
            >
              Read more
              <span
                className="icon-arrow-right"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </article>
    ))}
  </div>
)

export default EventList
