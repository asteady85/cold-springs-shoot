import React from 'react'

interface propTypes { hTag:string, text: string, altText: string }
const Heading = ({ hTag = 'h1', text = '', altText = '' }:propTypes): JSX.Element => {
  const Type:string = hTag
  const span = (altText.length) && (<span className='thin brand-dark-colour'> {altText}</span>)
  return (<Type {...{ key: text+span }}>{text}{span}</Type>)
}

export default Heading
