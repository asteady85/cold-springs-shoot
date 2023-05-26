import React from 'react'
import { Star } from '@styled-icons/fa-solid'

import './star-ratings.scss'
  ''

interface propTypes { rating:number }
const StarRatings = ({ rating = 0 }:propTypes): JSX.Element => {
  return (<div className='star-rating'>
    { (rating >= 1) ? (<Star className='fill' />) : (<Star />) }
    { (rating >= 2) ? (<Star className='fill' />) : (<Star />) }
    { (rating >= 3) ? (<Star className='fill' />) : (<Star />) }
    { (rating >= 4) ? (<Star className='fill' />) : (<Star />) }
    { (rating >= 5) ? (<Star className='fill' />) : (<Star />) }
  </div>)
}

export default StarRatings
