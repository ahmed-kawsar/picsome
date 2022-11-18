import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../Context'

function Image({ className, img }) {
  const { isFavorited, addToCart, cartItems, removeFromCart } =
    useContext(Context)
  const [hovered, setHovered] = useState(false)

  const heartIcon = hovered && (
    <i
      onClick={() => isFavorited(img.id)}
      className={`${
        img.isFavorited ? 'ri-heart-fill' : 'ri-heart-line'
      } favorite`}
    ></i>
  )
  const alreadyInCart = cartItems.some((item) => item.id === img.id)

  const cartIcon =
    hovered &&
    (alreadyInCart ? (
      <i
        onClick={() => removeFromCart(img.id)}
        className='ri-shopping-cart-fill cart'
      ></i>
    ) : (
      <i onClick={() => addToCart(img)} className='ri-add-circle-line cart'></i>
    ))

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
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
}

export default Image
