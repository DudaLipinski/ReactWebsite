import React from 'react'

import ProductSide from 'components/ProductSide'
import ProductList from 'components/ProductList'
import TeamHorizontal from 'components/TeamHorizontal'

import productCards from 'data/products'
import PeopleHappy from 'images/happy-people.jpg'

const Product = () => (
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
              <p className="font-x-small semi-bold margin-bottom">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec dui mollis, hendrerit libero non, euismod nisi.
              </p>
              <div className="">
                <img src={PeopleHappy} className="img-small img-left left-rounded" alt="" />
                <p className="font-small">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </article>
          </div>
        </section>
        <aside className="child-two">
          <ProductSide />
          <hr className="line" />
        </aside>
      </div>
    </div>
    <section className="centralizer-container">
      <div className="centered-content">
        <TeamHorizontal />
      </div>
    </section>
    <ProductList cards={productCards} />
  </main>
)

export default Product
