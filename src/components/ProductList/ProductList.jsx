import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({ cards }) => (

  <section className="centralizer-container list-products">
    <div className="centered-content-large bg-orange space">
      <div className="centralizer-container">
        <div className="centered-content">
          <div className="text-center">
            <span className="margin-small font-small uppercase font-red semi-bold">
              company
            </span>
            <h2 className="font-large semi-bold margin-small">Products</h2>
          </div>
          <div className="flex flex-wrap">
            {cards.map(({
              title,
              shortDescription,
              followUpUrl,
            }) => (
              <article className="list-product item-wrap shadow">
                <div className="list-product-card">
                  <div className="text-center">
                    <h3 className="margin-none font-midder bold">
                      {title}
                    </h3>
                    <p className="font-small margin-small short-description">
                      {shortDescription}
                    </p>
                  </div>
                  <div className="read-more">
                    <Link to={followUpUrl} className="flex align-center font-small font-green semi-bold ">
                      Read more
                      <span className="icon-arrow-right" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ProductList
