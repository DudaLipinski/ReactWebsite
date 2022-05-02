import React from 'react'

import TeamList from 'components/TeamList'
import Location from 'components/Location'
import ProductList from 'components/ProductList'

import teamCards from 'data/team'
import locationCards from 'data/location'
import productCards from 'data/products'

import OrangeHeart from 'images/heart-orange.svg'
import PeopleHappy from 'images/happy-people.jpg'

const AboutUs = () => (
  <main className="bg-white font-green main-space">
    <section className="centralizer-container">
      <div className="centered-content flex align-center">
        <div className="flex align-end">
          <div className="layer-1">
            <div className="event-box">
              <span className="margin-small font-tiny uppercase font-red semi-bold">
                company
              </span>
              <article>
                <h2 className="margin-small margin-bottom font-large bold">
                  About Us
                </h2>
                <p className="font-smaller semi-bold margin-bottom">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec dui mollis, hendrerit libero non, euismod nisi.
                </p>
                <p className="font-smaller margin-bottom">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <ul>
                  <li className="li-heart margin-bottom">More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. PageMaker including versions of Lorem Ipsum..</li>
                  <li className="li-heart margin-bottom">More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                  <li className="li-heart margin-bottom">More recently with desktop publishing software like Aldus PageMake.</li>
                </ul>
              </article>
            </div>
          </div>
          <div className="layer-1">
            <img
              className="left-rounded img-large img-about"
              src={PeopleHappy}
              alt=""
            />
          </div>
          <div>
            <img
              className="orange-heart"
              src={OrangeHeart}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section className="centralizer-container team">
      <div className="centered-content default-space">
        <div className="text-center">
          <span className="margin-small font-small uppercase font-red semi-bold">
            company
          </span>
          <h2 className="font-large semi-bold margin-small">Employees</h2>
        </div>
        <TeamList cards={teamCards} />
      </div>
    </section>
    <section className="centralizer-container location">
      <div className="centered-content space">
        <div className="text-center margin-bottom">
          <span className="margin-small font-small uppercase font-red semi-bold">
            company
          </span>
          <h2 className="font-large semi-bold margin-small">Address</h2>
          <p className="semi-bold margin-small"></p>
        </div>
        <div>
          <Location cards={locationCards} />
        </div>
      </div>
    </section>
    <ProductList cards={productCards} />
  </main>
)

export default AboutUs
