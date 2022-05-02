import React from 'react'
import { Link } from 'react-router-dom'

import EventSide from 'components/EventSide'
import imageEvent from 'images/event.jpg'

const Event = () => (
  <main className="bg-white font-green main-space">
    <div className="centralizer-container">
      <div className="centered-content flex">
        <section className="child-one">
          <div className="event-box">
            <span className="margin-small font-tiny uppercase font-red semi-bold">
              company
            </span>
            <article>
              <h2 className="margin-small margin-bottom font-large bold">
                Event
              </h2>
              <div className="">
                <img src={imageEvent} className="img-larger left-rounded" alt="" />
                <div className="font-small margin-small">
                  <p className="margin-none">
                    Date: 21/4/2021
                  </p>
                  <p className="margin-none">
                    Place: online
                  </p>
                  <p className="margin-none">
                    Boka:
                    {' '}
                    <Link className="font-green" to="/"><strong>event@company.se</strong></Link>
                  </p>
                </div>
                <p className="font-smaller semi-bold margin-bottom">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec dui mollis, hendrerit libero non, euismod nisi.
                </p>
                <p className="font-x-small">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className="margin-none font-small">
                  Boka:
                  {' '}
                  <Link className="font-green" to="/"><strong>event@company.se</strong></Link>
                </p>
              </div>
            </article>
          </div>
        </section>
        <aside className="child-two">
          <EventSide />
          <EventSide />
        </aside>
      </div>
    </div>
  </main>
)

export default Event
