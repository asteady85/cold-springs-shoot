import React from 'react'
import HorizontalBlock from '../components/horizontal-block'

interface modulePropTypes {
  imgLeft?: boolean,
  imgRight?: boolean,
  desc: JSX.Element,
  imgClass: string,
  hideImgMobile: boolean
  blockPadding?: boolean
}
const ImgWithDesc = (props: modulePropTypes): JSX.Element => {
  let { imgLeft, imgRight} = props
  const { desc, imgClass, hideImgMobile, blockPadding } = props

  if (!imgLeft && !imgRight){
    imgLeft = true
    imgLeft = true
  }

  const hideMobile = (hideImgMobile) && 'hide-mobile'

  const descriptionBlock = {
    blockClass: 'desc',
    content: desc
  }

  const imgBlock = {
    blockClass: `img ${imgClass} ${hideMobile}`,
    content: (<div />)
  }

  const horizontalBlockClasses = (imgRight) && 'reverse'
  const blockClasses = (!blockPadding) && 'no-padding'

  return (
    <div className={`content img-with-desc ${blockClasses}`}>
      <HorizontalBlock items={[imgBlock, descriptionBlock]} classes={horizontalBlockClasses} />
    </div>
  )
}

export default ImgWithDesc
