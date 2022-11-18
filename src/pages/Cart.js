import { useState } from 'react'
import { useContext } from 'react'
import CartItem from '../components/CartItem'
import { Context } from '../Context'

const Cart = () => {
  const [buttonText, setButtonText] = useState('Place Order')
  const [msg, setMsg] = useState('')
  const { cartItems, emptyCart } = useContext(Context)
  const cartElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ))
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  function placeOrder() {
    setButtonText('Ordering...')
    setTimeout(() => {
      setButtonText('Place Order')
      emptyCart()
      setMsg('order placed')
    }, 3000)
  }

  return (
    <main className='cart-page'>
      <h1 className='check-out'>Cart Screen</h1>
      <h2>{msg}</h2>
      {cartElements}
      <p className='total-cost'>Total: {totalCostDisplay}</p>
      <div className='order-button'>
        <button onClick={placeOrder}>{buttonText}</button>
      </div>
    </main>
  )
}
export default Cart
