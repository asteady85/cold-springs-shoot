import React, { useEffect, Fragment } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = ({ children }) => {
  let location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  return <Fragment>{children}</Fragment>
}

export default ScrollToTop
