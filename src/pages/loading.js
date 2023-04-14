import React from 'react'
import { Spinner } from '@styled-icons/fa-solid/Spinner'
import '../scss/Loading.scss'

const Loading = () => (
  <div className='loading--wrapper'>
    <div className='loading--content'>
      <h3>Fetching Content</h3>
      <Spinner />
      <p>Loading page content, please wait....</p>
    </div>
  </div>
)

export default Loading
