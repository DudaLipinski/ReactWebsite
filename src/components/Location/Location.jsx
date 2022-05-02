import React from 'react'

const Location = ({ cards }) => (

  cards.map(({
    address,
    url,
  }) => (
    <article className="shadow margin-bottom location-card flex space-between align-center">
      <p className="margin-none font-smaller semi-bold">{address}</p>
      <div className="read-more">
        <a
          href={url}
          className="flex flex-start align-center font-small font-green semi-bold"
        >
          View map
          <span
            className="icon-arrow-right location-arrow"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  ))
)

export default Location
