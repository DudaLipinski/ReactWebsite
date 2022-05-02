import React from 'react'

import EventList from 'components/EventList'
import eventCards from 'data/events'

const Events = () => (
  <main className="bg-white font-green main-space">
    <section className="centralizer-container">
      <div className="centered-content">
        <span className="margin-small font-tiny uppercase font-red semi-bold">
          company
        </span>
        <h2 className="margin-small font-large bold">
          Events
        </h2>
        <EventList cards={eventCards} />
      </div>
    </section>
  </main>
)

export default Events
