import React from 'react'
import './price-list.scss'

interface propTypes { heading: string, price: JSX.Element, description: JSX.Element, children: string, brand: string }
const PriceList = ({ heading, price, children, description, brand='other-price' }:propTypes): JSX.Element => {
  return (
    <div className='price-list--wrapper'>
      <div className={`price-list--details ${brand}`}>
        <div className="price-list--details--headline">
          <h2>{heading}</h2>
        </div>

        <div className='price-list--details--content'>
          <h3 className="mb-0">
            <span className="d-flex flex-justify-center flex-items-center">
              {price}
            </span>
          </h3>
          {
            (description) && (<div className='price-list--details--content--desc'>{description}</div>)
          }

          {children}
        </div>
      </div>
    </div>
  )
}

export default PriceList