import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../Context'

function Image({ className, img }) {
  const { isFavorited } = useContext(Context)
  const [hovered, setHovered] = useState(false)

  const heartIcon = hovered && (
    <i
      onClick={() => isFavorited(img.id)}
      className={`${
        img.isFavorited ? 'ri-heart-fill' : 'ri-heart-line'
      } favorite`}
    ></i>
  )
  const cartIcon = hovered && <i className='ri-add-circle-line cart'></i>

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className='image-grid' alt='img' />
      {heartIcon}
      {cartIcon}
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string.isRequired,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
}

export default Image
