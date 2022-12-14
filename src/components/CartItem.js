import { useContext } from 'react'
import { Context } from '../Context'

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(Context)
  return (
    <div className='cart-item'>
      <i
        onClick={() => removeFromCart(item.id)}
        className='ri-delete-bin-line'
      ></i>
      <img src={item.url} width='130px' alt='img' />
      <p>$5.99</p>
    </div>
  )
}
export default CartItem
