import React from 'react'
import { Link } from 'react-router-dom'

import Carousel from 'components/Carousel'
import Testimonial from 'components/Testimonial'

import CalendarIllustration from 'images/calendar.png'
import HeartWhite from 'images/heart-white.svg'
import productCards from 'data/products'

const testimonialCards = [
  {
    title: 'Testimonial 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac massa sagittis, tempus elit non, congue odio. Nulla lorem sapien, dignissim eu arcu nec, accumsan malesuada ex.',
  },
  {
    title: 'Testimonial 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac massa sagittis, tempus elit non, congue odio. Nulla lorem sapien, dignissim eu arcu nec, accumsan malesuada ex.',
  },
  {
    title: 'Testimonial 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac massa sagittis, tempus elit non, congue odio. Nulla lorem sapien, dignissim eu arcu nec, accumsan malesuada ex.',
  },
]

const Home = () => (
  <main className="bg-white font-green">
    <section className="centralizer-container banner bg-orange">
      <div className="centered-content flex space-between equal-columns space">
        <div>
          <h1 className="main-title font-larger semi-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec dui mollis, hendrerit libero non, euismod nisi.
          </h1>
        </div>
        <div />
      </div>
    </section>
    <section className="centralizer-container work-with bg-green">
      <div className="centered-content flex space-between space align-center">
        <div>
          <h2 className="uppercase font-tiny font-white">Principal links</h2>
        </div>
        <div>
          <nav>
            <ul className="flex font-small">
              <li>
                <Link
                  className="oblong-button-large bg-white font-green"
                  to="#products"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="oblong-button-large bg-white font-green"
                  to="/"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  className="oblong-button-large bg-white font-green"
                  to="/"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <section className="products" id="products">
      <div className="space">
        <Carousel cards={productCards} />
      </div>
    </section>
    <section id="company" className="centralizer-container company-uniqueness bg-orange">
      <div className="centered-content space">
        <div className="text-center">
          <span className="margin-small font-tiny uppercase font-red semi-bold">
            company
          </span>
          <h2 className="font-large semi-bold">About us</h2>
        </div>
        <div className="flex space-between equal-columns">
          <article>
            <p className="font-smaller semi-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec dui mollis, hendrerit libero non, euismod nisi.
            </p>
            <div className="flex text-box font-smaller">
              <span
                className="icon icon-check-circle"
                aria-hidden="true"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex text-box font-smaller">
              <span className="icon icon-book" aria-hidden="true" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex text-box font-smaller">
              <span className="icon icon-job" aria-hidden="true" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex text-box font-smaller">
              <span className="icon icon-home" aria-hidden="true" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex text-box font-smaller">
              <span className="icon icon-heart" aria-hidden="true" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </article>
          <div>
            <img
              className="heart-white"
              src={HeartWhite}
              alt=""
            />

          </div>
        </div>
      </div>
    </section>
    <section className="centralizer-container event">
      <div className="centered-content flex space align-center">
        <div className="flex equal-columns">
          <div>
            <div className="event-box">
              <h2 className="margin-small font-tiny uppercase font-red semi-bold">
                Events
              </h2>
              <article className="event-item">
                <h3 className="margin-small font-large semi-bold">
                  Acceptance and commitment therapy
                </h3>
                <div className="date font-tiny">
                  <p>Date: 21/4/2021</p>
                  <p>Place: online</p>
                </div>
                <p className="font-smaller">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec dui mollis, hendrerit libero non, euismod nisi.
                </p>
                <div className="read-more">
                  <a
                    href="/"
                    className="flex flex-start align-center font-small font-green semi-bold"
                  >
                    Read more
                    <span
                      className="icon-arrow-right"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
              <article className="event-item">
                <h3 className="margin-small font-large semi-bold">
                  Mindfullness
                </h3>
                <div className="date font-tiny">
                  <p>Date: 21/4/2021</p>
                  <p>Place: online</p>
                </div>
                <p className="font-smaller">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec dui mollis, hendrerit libero non, euismod nisi.
                </p>
                <div className="read-more">
                  <a
                    href="/"
                    className="flex flex-start align-center font-small font-green semi-bold"
                  >
                    Read more
                    <span
                      className="icon-arrow-right"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
              <div>
                <button type="button" className="oblong-button bg-blue font-small font-white">
                  Events
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              className="calendar"
              src={CalendarIllustration}
              alt="Illustration av en man som skriver på kalendern."
            />
          </div>
        </div>
      </div>
    </section>
    <section className="centralizer-container testimonial">
      <div className="centered-content space">
        <Testimonial cards={testimonialCards} />
      </div>
    </section>
  </main>
)

export default Home
