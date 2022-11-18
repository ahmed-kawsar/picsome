import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

const Header = () => {
  const { cartItems } = useContext(Context)
  const cartClassName =
    cartItems.length > 0 ? 'ri-shopping-cart-fill' : 'ri-shopping-cart-line'
  return (
    <header className='bg-green-400 flex items-center justify-between px-6 shadow-md'>
      <Link to='/'>
        <h2 className='text-lg font-bold'>picsome</h2>
      </Link>
      <Link to='cart'>
        <i className={`${cartClassName} ri-fw ri-2x`}></i>
      </Link>
    </header>
  )
}
export default Header
