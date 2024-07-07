import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.css';
import { useCart } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ isOpen, toggleCart }) => {
  const { cartElements, removeFromCart, setCartElements } = useCart();

  const getTotalPrice = () => {
    return cartElements.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity >= 0) {

    const updatedCart = [...cartElements];
    updatedCart[index].quantity = newQuantity;
    setCartElements(updatedCart);
    }
  };

  return (
    <section id="cart" className={`container ${isOpen ? 'open' : ''}`}>
      <h2 className='carrt'>CART</h2>
      <button className="cancel" onClick={toggleCart}>X</button>
      <div className="cart-row cart-header">
        <span className='cart-item cart-column'>ITEM</span>
        <span className="cart-divider"></span>
        <span className='cart-price cart-column'>PRICE</span>
        <span className="cart-divider"></span>
        <span className='cart-quantity cart-column'>QUANTITY</span>
        <span className="cart-divider"></span>
        <span className='cart-remove cart-column'></span>
      </div>

      <div className='cart-items'>
        {cartElements.map((item, index) => (
          <div className="cart-row" key={index}>
            <div className='cart-item cart-column'>
              <img className='cart-img' src={item.imageUrl} alt={item.title} />
              <span className='cart-title'>{item.title}</span>
            </div>
            <span className='price cart-column'>$ {item.price}</span>
            <div className='quantity cart-column'>
              <div className="quantity-container">
                <input
                  type="number"
                  className="quantity-input"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                />
              </div>
            </div>
            <div className='cart-remove cart-column'>
              <Button variant="danger" 
              className="custom-remove-button" onClick={() => removeFromCart(index)}>
                REMOVE
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <span>
          <span className='total-title'><strong>Total</strong></span>
          $<span id='total-value'>{getTotalPrice()}</span>
        </span>
      </div>
      <button className='purchase-btn' type='button'>PURCHASE</button>
    </section>
  );
};

export default Cart;